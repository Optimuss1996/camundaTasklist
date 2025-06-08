import TasklistHeader from "./TasklistHeader";
import TaskListItems from "./TaskListItems";
export default function Sidebar() {
  return (
    <div className=" h-screen w-full  md:w-[350px] px-2 py-1  shadow-[-11px_0px_6px_-10px_rgba(0,_0,_0,_0.1)] ">
      <TasklistHeader />
      <TaskListItems />
    </div>
  );
}
