import TooltipWrapper from "@/components/common/TooltipWrapper";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useGetUserTasks } from "@/services/reactQuery/useUserTask";
import { useAuthStore } from "@/store/useAuthStore";
import {
  convertToJalaliDateString,
  toPersianDigits,
} from "@/utils/ConvertMiladiToShamsi";
export default function Index() {
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
    <div className="w-full px-4 py-2 ">
      <div className="text-xl font-bold pb-4 text-custom-primary">
        لیست وظایف :
      </div>
      <div className=" flex  flex-col gap-6">
        {tasks?.map((task) => (
          <div className="flex flex-col gap-4 bg-custom-neutral05 border-2 rounded-2xl px-4 py-3">
            <div className="w-full h-[350px] flex flex-col justify-between gap-6 ">
              {/* task name */}
              <div className="flex justify-center items-center">
                <p className="text-xl font-bold text-custom-primary">
                  {task.name}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-around items-center">
                  <p className="text-base  text-custom-neutral02"> مسئول : </p>
                  <p className="text-base  text-custom-neutral02">
                    {task.assignee}
                  </p>
                </div>

                <div className="flex justify-around items-center">
                  <p className="text-base  text-custom-neutral02">
                    تاریخ ایجاد :{" "}
                  </p>
                  <p className="text-base  text-custom-neutral02">
                    {convertToJalaliDateString(task.created)}
                  </p>
                </div>
                {/* task details */}
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
              </div>

              {/* task process definition id */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-start items-center">
                  <p className="text-base  text-custom-neutral02">
                    شناسه فرآیند :{" "}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-base  text-custom-neutral02">
                    {task.processDefinitionId}
                  </p>
                </div>
              </div>
              {/* task button */}
              <div className="flex justify-center items-center">
                <Button className="bg-custom-primary text-white px-4 py-2 rounded-lg w-full max-w-[300px] cursor-pointer">
                  مشاهده کامل جزییات
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
