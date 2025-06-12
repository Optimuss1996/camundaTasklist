import { AppSidebar } from "@/components/taskboard/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/layout/Header";

export default function Taskboard() {
  return (
    <SidebarProvider>
      <div className="w-full max-w-[1920px] h-screen bg-custom-neutral05 overflow-hidden">
        <Header />
        <div className="w-full h-screen bg-custom-neutral05 flex flex-col md:flex-row  items-center justify-center">
          <h1 className="w-[80px] h-screen bg-transparent hidden md:block"></h1>
          <h1 className="text-custom-primary h-screen  text-2xl font-bold bg-amber-600 flex-1">
            tasklist
          </h1>
          <h1 className="text-custom-primary h-screen text-2xl font-bold bg-blue-700 flex-1">
            details form
          </h1>
        </div>
        <div className="w-full h-screen bg-custom-neutral05">
          {/* <SidebarTrigger /> */}
          <AppSidebar />
        </div>
      </div>
    </SidebarProvider>
  );
}
