import { AppSidebar } from "@/components/taskboard/sidebar/app-sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/layout/Header";
import TaskDetails from "@/components/taskboard/taskdetails/TaskDetails";

export default function Taskboard() {
  return (
    <SidebarProvider>
      <div className="w-full max-w-[1920px]  bg-custom-neutral05 overflow-x-hidden">
        {/* ---------------------------sidebar--------------------------- */}
        <Header />
        {/* ---------------------------sidebar--------------------------- */}

        {/* ---------------------------main content--------------------------- */}

        <div className=" w-full bg-custom-neutral05">
          <div className="w-[80px] h-screen bg-transparent hidden md:block"></div>
          {/* <div className="w-full h-screen bg-transparent flex flex-col md:flex-row gap-x-5 gap-y-3 items-center justify-center px-2 py-3 md:px-4 md:py-4 "> */}

          <div className="bg-custom-neutral04 h-full w-full flex-1 rounded-2xl border border-custom-neutral03 flex justify-center items-center">
            <div className=" w-full ">
              <TaskDetails />
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* ---------------------------main content--------------------------- */}

        {/* ---------------------------sidebar--------------------------- */}
        <div className="w-full h-screen bg-custom-neutral05">
          <AppSidebar />
        </div>
        {/* ---------------------------sidebar--------------------------- */}
      </div>
    </SidebarProvider>
  );
}
