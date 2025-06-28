import { AppSidebar } from "@/components/taskboard/sidebar/app-sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/layout/Header";
import TaskDetails from "@/components/taskboard/tasklist/TaskDetails";

export default function Taskboard() {
  return (
    <SidebarProvider>
      <div className="w-full max-w-[1920px]  bg-custom-neutral04 overflow-x-hidden ">
        {/* ---------------------------header--------------------------- */}
        <Header />
        {/* ---------------------------header--------------------------- */}

        {/* ---------------------------main content--------------------------- */}

        <div className=" w-full flex bg-custom-neutral04 pt-20">
          <div className="w-[80px] h-screen bg-transparent hidden md:block"></div>

          <div className="bg-custom-neutral04  w-full flex-1  flex justify-center items-center">
            <div className=" w-full ">
              <TaskDetails />
            </div>
          </div>
        </div>

        {/* ---------------------------main content--------------------------- */}

        {/* ---------------------------sidebar--------------------------- */}
        <div>
          <AppSidebar />
        </div>
        {/* ---------------------------sidebar--------------------------- */}
      </div>
    </SidebarProvider>
  );
}
