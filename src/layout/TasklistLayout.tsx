import { cn } from "@/lib/utils";
import Sidebar from "@/modules/sidebar/Sidebar";
import TaskDetails from "@/modules/taskdetails/TaskDetails";
import Tasklist from "@/modules/tasklist/Tasklist";
import { useTasklistLayoutStore } from "@/store/useTasklistLayoutState";
export default function TasklistLayout() {
  const { isSidebarOpen, isTasklistOpen } = useTasklistLayoutStore();
  return (
    <div dir="rtl" className="flex md:flex-row flex-col ">
      <div>
        <Sidebar />
      </div>
      <div
        className={cn(
          "w-80 transition-all duration-300 ease-in-out",
          !isTasklistOpen && "absolute -right-44"
        )}
      >
        <Tasklist />
      </div>
      <div className=" flex-1">
        <TaskDetails />
      </div>
    </div>
  );
}
