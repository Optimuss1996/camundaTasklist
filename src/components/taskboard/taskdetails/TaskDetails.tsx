import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import type { SortingState } from "@tanstack/react-table";
import { useGetUserTasks } from "@/services/reactQuery/useUserTask";
import { useAuthStore } from "@/store/useAuthStore";
import { type Task } from "@/types/types";
import { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import { convertToJalaliDateString } from "@/utils/ConvertMiladiToShamsi";
import { CiSearch } from "react-icons/ci";
import { FaAnglesLeft, FaChevronLeft } from "react-icons/fa6";
import { Input } from "@/components/ui/input";

type TaskTableRow = Pick<
  Task,
  "name" | "assignee" | "priority" | "processDefinitionId" | "created"
>;

const columnHelper = createColumnHelper<TaskTableRow>();

const columns = [
  columnHelper.accessor("name", {
    enableSorting: false,
    cell: (info) => info.getValue(),
    header: () => (
      <span className="text-custom-primary font-bold">عنوان وظیفه</span>
    ),
  }),
  columnHelper.accessor("assignee", {
    enableSorting: false,
    cell: (info) => info.getValue(),
    header: () => <span className="text-custom-primary font-bold">مسئول</span>,
  }),
  columnHelper.accessor("priority", {
    enableSorting: true,
    cell: (info) => info.getValue(),
    header: () => <span className="text-custom-primary font-bold">اولویت</span>,
  }),
  columnHelper.accessor("processDefinitionId", {
    enableSorting: false,
    cell: (info) => info.getValue(),
    header: () => (
      <span className="text-custom-primary font-bold">شناسه فرایند</span>
    ),
  }),
  columnHelper.accessor("created", {
    enableSorting: true,
    cell: (info) => convertToJalaliDateString(info.getValue()),
    header: () => (
      <span className="text-custom-primary font-bold">تاریخ ایجاد</span>
    ),
    sortingFn: (rowA, rowB, columnId) => {
      const a = new Date(rowA.getValue(columnId)).getTime();
      const b = new Date(rowB.getValue(columnId)).getTime();
      return a - b;
    },
  }),
];

export default function TaskDetails() {
  const { userName } = useAuthStore();
  const { data: tasks = [], isLoading } = useGetUserTasks(userName || "");
  console.log(tasks);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const table = useReactTable({
    data: tasks,
    columns,
    state: { sorting, globalFilter },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
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
    <div className="flex flex-col mx-auto min-h-screen w-full  py-12">
      {/* فیلتر کلی */}
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

      {/* جدول */}
      <div className=" overflow-x-auto">
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
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* صفحه‌بندی */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-700">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="mr-2">تعداد در صفحه</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
          >
            {[5, 10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="p-2 rounded-md bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:opacity-50"
          >
            <FaAnglesLeft size={20} />
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-2 rounded-md bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:opacity-50"
          >
            <FaChevronLeft size={20} />
          </button>

          <span className="flex items-center gap-1">
            <input
              type="number"
              min={1}
              max={table.getPageCount()}
              value={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="w-16 p-2 rounded-md border border-gray-300 text-center"
            />
            <span>از {table.getPageCount()}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// import {
//   useReactTable,
//   getCoreRowModel,
//   flexRender,
//   type ColumnDef,
// } from "@tanstack/react-table";
// import { useMediaQuery } from "usehooks-ts";
// import { useGetUserTasks } from "@/services/reactQuery/useUserTask";

// const columns: ColumnDef<Task>[] = [
//   {
//     accessorKey: "name",
//     header: "عنوان وظیفه",
//   },
//   {
//     accessorKey: "assignee",
//     header: "مسئول",
//   },
//   {
//     accessorKey: "priority",
//     header: "اولویت",
//   },
//   {
//     accessorKey: "processDefinitionId",
//     header: "شناسه فرایند",
//   },
//   {
//     accessorKey: "created",
//     header: "تاریخ ایجاد",
//   },
// ];

// export default function TaskDetails() {
//   const { userName } = useAuthStore();
//   const { data: tasks, isLoading } = useGetUserTasks(userName || "");
//   console.log("display tasks", tasks);

//   const isLg = useMediaQuery("(min-width: 1024px)");
//   const isMd = useMediaQuery("(min-width: 768px)");
//   const isSm = useMediaQuery("(min-width: 640px)");

//   const getVisibleColumns = (): string[] => {
//     if (isLg)
//       return ["name", "assignee", "priority", "processDefinitionId", "created"];
//     if (isMd) return ["name", "assignee", "priority", "processDefinitionId"];
//     if (isSm) return ["name", "assignee", "priority"];
//     return ["name"];
//   };

//   const visibleColumns = getVisibleColumns();

//   const table = useReactTable({
//     data: tasks as Task[],
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     state: {
//       columnVisibility: {
//         name: visibleColumns.includes("name"),
//         assignee: visibleColumns.includes("assignee"),
//         priority: visibleColumns.includes("priority"),
//         processDefinitionId: visibleColumns.includes("processDefinitionId"),
//         created: visibleColumns.includes("created"),
//       },
//     },
//   });

//   return (
//     <div className="p-4 overflow-x-auto">
//       <h2 className="text-xl font-bold mb-4">لیست وظایف</h2>
//       {isLoading && <p>در حال بارگذاری...</p>}
//       {!isLoading && tasks?.length === 0 && <p>وظیفه‌ای یافت نشد.</p>}
//       {!isLoading && (
//         <table className="min-w-full border border-gray-300 rounded-md shadow-sm text-sm">
//           <thead className="bg-gray-100">
//             {table.getHeaderGroups().map((headerGroup) => (
//               <tr key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <th
//                     key={header.id}
//                     className="px-4 py-2 text-right border font-medium text-gray-700 whitespace-nowrap"
//                   >
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>

//           <tbody>
//             {table.getRowModel().rows.map((row) => (
//               <tr key={row.id} className="border-t">
//                 {row.getVisibleCells().map((cell) => (
//                   <td key={cell.id} className="px-4 py-2 border">
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }
