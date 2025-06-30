import { type EnrichedTask } from "@/types/types";
import { convertToJalaliDateString } from "@/utils/ConvertMiladiToShamsi";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Props = {
  rows: Array<{ original: EnrichedTask }>;
  globalFilter: string;
  setGlobalFilter: (val: string) => void;
  sortDir: any;
  setSortDir: (val: any) => void;
};

export default function MobileTaskCards({
  rows,
  globalFilter,
  setGlobalFilter,
  sortDir,
  setSortDir,
}: Props) {
  const isAscending = sortDir?.[0]?.desc === false;

  const handleSort = (order: "asc" | "desc") => {
    setSortDir([
      {
        id: "created",
        desc: order === "desc",
      },
    ]);
  };

  return (
    <div className="flex flex-col gap-4 px-4">
      {/* 🔍 سرچ اینپوت */}
      <Input
        dir="rtl"
        className="w-full pr-10 pt-4 py-2 h-12 text-right placeholder:text-right text-custom-neutral02"
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="جستجو..."
      />

      {/* 📌 مرتب‌سازی */}
      <div className="flex flex-wrap gap-2 items-center text-sm mt-2">
        <span className="text-gray-600">ترتیب:</span>
        <button
          onClick={() => handleSort("desc")}
          className={`px-3 py-1 rounded-md border ${
            !isAscending
              ? "bg-blue-100 text-blue-700 font-semibold"
              : "text-gray-600"
          }`}
        >
          جدیدترین
        </button>
        <button
          onClick={() => handleSort("asc")}
          className={`px-3 py-1 rounded-md border ${
            isAscending
              ? "bg-blue-100 text-blue-700 font-semibold"
              : "text-gray-600"
          }`}
        >
          قدیمی‌ترین
        </button>
      </div>

      {/* 🗂 کارت‌ها */}
      {rows.map((row) => {
        const task = row.original;
        return (
          <div
            key={task.id}
            className="rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] p-4 bg-custom-neutral05   transition cursor-pointer"
            onClick={() => console.log("کلیک روی", task.id)} // یا برو به صفحه جزئیات
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-custom-primary">
                نام فرآیند:
              </span>
              <span className="text-sm">{task.processDefinitionName}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-custom-primary">
                نام فعالیت:
              </span>
              <span className="text-sm">{task.name}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-custom-primary">
                تاریخ ایجاد:
              </span>
              <span className="text-sm">
                {convertToJalaliDateString(task.created)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-custom-primary">
                آغازکننده:
              </span>
              <span className="text-sm">{task.processStarter}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
