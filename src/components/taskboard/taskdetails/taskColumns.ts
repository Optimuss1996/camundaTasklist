import { ColumnDef } from "@tanstack/react-table";
import { TooltipWrapper } from "@/components/common/TooltipWrapper";
import { cn } from "@/lib/utils";
import {
  convertToJalaliDateString,
  toPersianDigits,
} from "@/utils/ConvertMiladiToShamsi";
import { Task } from "@/types";

export const taskColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: "عنوان وظیفه",
    cell: ({ getValue }) => (
      <span className="font-bold text-custom-primary">
        {getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "assignee",
    header: "مسئول",
    cell: ({ getValue }) => (
      <span className="text-custom-neutral02">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "priority",
    header: "اولویت",
    cell: ({ getValue }) => {
      const priority = getValue() as number;

      const getPriorityColor = (priority: number) => {
        if (priority >= 80) return "bg-red-600 text-white";
        if (priority >= 50) return "bg-orange-500 text-white";
        if (priority >= 20) return "bg-yellow-400 text-black";
        return "bg-green-400 text-black";
      };

      return (
        <TooltipWrapper>
                   {" "}
          <span
            className={cn(
              "px-2 py-1 rounded-lg text-sm font-semibold",
              getPriorityColor(priority)
            )}
          >
                        {toPersianDigits(priority)}         {" "}
          </span>
                 {" "}
        </TooltipWrapper>
      );
    },
  },
  {
    accessorKey: "processDefinitionId",
    header: "شناسه فرایند",
    cell: ({ getValue }) => (
      <span className="text-xs text-custom-neutral02">
        {getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "created",
    header: "تاریخ ایجاد",
    cell: ({ getValue }) => (
      <span>{convertToJalaliDateString(getValue() as string)}</span>
    ),
  },
];
