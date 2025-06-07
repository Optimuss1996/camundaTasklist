import { cn } from "@/lib/utils";
import Sidebar from "@/modules/sidebar/Sidebar";
import TaskDetails from "@/modules/taskdetails/TaskDetails";
import Tasklist from "@/modules/tasklist/Tasklist";
import { useTasklistLayoutStore } from "@/store/useTasklistLayoutState";
export default function TasklistLayout() {
  const { isSidebarOpen } = useTasklistLayoutStore();
  return (
    <div dir="rtl" className="flex md:flex-row flex-col">
      <div className={cn("w-56", !isSidebarOpen && "w-16")}>
        <Sidebar />
      </div>
      <div className="w-80">
        <Tasklist />
      </div>
      <div className=" flex-1">
        <TaskDetails />
      </div>
    </div>
  );
}
