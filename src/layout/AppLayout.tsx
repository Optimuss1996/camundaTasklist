import Header from "./Header";
import TasklistLayout from "./TasklistLayout";
export default function AppLayout() {
  return (
    <div className="max-w-[1920px] mx-auto h-screen flex flex-col overflow-y-hidden overflow-x-hidden   ">
      <Header />
      <main className="h-auto  md:h-screen pt-2 ">
        <TasklistLayout />
      </main>
    </div>
  );
}
