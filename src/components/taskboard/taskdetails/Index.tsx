import TooltipWrapper from "@/components/common/TooltipWrapper";
import { cn } from "@/lib/utils";
import { useGetUserTasks } from "@/services/reactQuery/useUserTask";
import { useAuthStore } from "@/store/useAuthStore";
import {
  convertToJalaliDateString,
  toPersianDigits,
} from "@/utils/ConvertMiladiToShamsi";

export default function TaskDetails() {
  const { userName } = useAuthStore();
  console.log("username account : ", userName);
  const { data: tasks, isLoading } = useGetUserTasks(userName || "");
  console.log("list of tasks : ", tasks);

  // get priority color for priority number
  const getPriorityColor = (priority: number) => {
    if (priority >= 80) return "bg-red-600 text-white";
    if (priority >= 50) return "bg-orange-500 text-white";
    if (priority >= 20) return "bg-yellow-400 text-black";
    return "bg-green-400 text-black";
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center">
        <div>عنوان وظیفه </div>
        <div>مسئول</div>
        <div>اولویت</div>
        <div>شناسه فرایند</div>
        <div>تاریخ</div>
      </div>
      {tasks?.map((task) => (
        <div className="flex justify-between items-center border-2">
          <p className="text-lg font-bold text-custom-primary">{task.name}</p>
          <p className="text-base  text-custom-neutral02">{task.assignee}</p>
          <p className="text-base  text-custom-neutral02">
            {convertToJalaliDateString(task.created)}
          </p>
          <div className="flex justify-around items-center">
            <p className="text-base  text-custom-neutral02"> اولویت : </p>
            <TooltipWrapper>
              <p
                className={cn(
                  "text-base font-bold px-3 py-1 rounded-lg",
                  getPriorityColor(task.priority)
                )}
              >
                {toPersianDigits(task.priority)}
              </p>
            </TooltipWrapper>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-base  text-custom-neutral02">
              {task.processDefinitionId}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
