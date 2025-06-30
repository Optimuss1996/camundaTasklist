import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type SortingState,
} from "@tanstack/react-table";

import { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { useMediaQuery } from "usehooks-ts";
import { useAuthStore } from "@/store/useAuthStore";
import { useEnrichedTasks } from "@/services/reactQuery/useEnrichedTasks";
import {
  convertToJalaliDateString,
  toPersianDigits,
} from "@/utils/ConvertMiladiToShamsi";
import { Input } from "@/components/ui/input";
import type { EnrichedTask } from "@/types/types";
import { IoEyeOutline } from "react-icons/io5";
import MobileTaskCards from "@/components/taskboard/tasklist/MobileTaskCards";

const columnHelper = createColumnHelper<EnrichedTask>();

const columns = [
  columnHelper.accessor("processDefinitionName", {
    header: () => (
      <span className="text-custom-primary font-bold">نام فرآیند</span>
    ),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: () => (
      <span className="text-custom-primary font-bold">نام فعالیت</span>
    ),
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("created", {
    header: () => (
      <span className="text-custom-primary font-bold">تاریخ ایجاد</span>
    ),
    cell: (info) => convertToJalaliDateString(info.getValue()),
    sortingFn: (rowA, rowB, columnId) => {
      const a = new Date(rowA.getValue(columnId)).getTime();
      const b = new Date(rowB.getValue(columnId)).getTime();
      return a - b;
    },
  }),
  columnHelper.accessor("processStarter", {
    header: () => (
      <span className="text-custom-primary font-bold">آغاز کننده</span>
    ),
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "actions",
    header: () => <span className="text-custom-primary font-bold">جزئیات</span>,
    cell: ({ row }) => (
      <button
        onClick={() => console.log("نمایش جزئیات برای", row.original.id)}
        className="text-blue-500 hover:underline"
      >
        <IoEyeOutline className="text-custom-primary" size={25} />
      </button>
    ),
  }),
];

export default function TaskDetails() {
  const { userName } = useAuthStore();
  const { data: tasks, isLoading } = useEnrichedTasks(userName ?? "");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data: tasks ?? [],
    columns,
    state: {
      sorting,
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  if (isLoading) return <p>در حال بارگذاری...</p>;

  return (
    <div className="flex flex-col mx-auto min-h-screen w-full py-12">
      {/* 🔍 فیلتر کلی فقط در دسکتاپ */}
      {isDesktop && (
        <div className="mb-4 relative w-full px-3 md:px-0 md:pr-3">
          <Input
            dir="rtl"
            className="w-full md:max-w-lg pr-10 pt-4 py-2 h-12 text-right placeholder:text-right text-custom-neutral02"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="جستجو..."
          />
          <CiSearch
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={25}
          />
        </div>
      )}

      {/* 📱 نمایش کارت‌ها در موبایل */}
      {isMobile && (
        <MobileTaskCards
          rows={table.getPaginationRowModel().rows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          sortDir={sorting}
          setSortDir={setSorting}
        />
      )}

      {/* 💻 نمایش جدول در دسکتاپ */}
      {isDesktop && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-custom-neutral05">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wide"
                    >
                      <div
                        className={
                          header.column.getCanSort()
                            ? "cursor-pointer select-none flex items-center gap-1"
                            : "flex items-center"
                        }
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && (
                          <LuArrowUpDown size={14} />
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-transparent divide-y divide-gray-200">
              {table.getPaginationRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 🔢 Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm px-6">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <span className="mr-2 font-bold text-custom-primary">
            تعداد در صفحه
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="border border-gray-300 rounded-md shadow-sm p-2"
          >
            {[5, 10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {toPersianDigits(pageSize)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
            title="صفحه اول"
          >
            <FaAnglesRight className="text-custom-primary" size={18} />
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
            title="قبلی"
          >
            <FaChevronRight className="text-custom-primary" size={18} />
          </button>

          <span className="text-sm text-gray-700">
            صفحه {toPersianDigits(table.getState().pagination.pageIndex + 1)} از{" "}
            {toPersianDigits(table.getPageCount())}
          </span>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50 "
            title="بعدی"
          >
            <FaChevronLeft className="text-custom-primary" size={18} />
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
            title="آخرین صفحه"
          >
            <FaAnglesLeft className="text-custom-primary" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
