import { AppSidebar } from "@/components/taskboard/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CustomMobileTrigger } from "@/components/ui/CustomeMobileTrigger";

interface TaskboardProps {
  children: React.ReactNode;
}

export default function Taskboard({ children }: TaskboardProps) {
  return (
    <div className="w-full h-screen bg-custom-neutral05">
      <div className="w-full h-screen bg-custom-neutral05">
        <SidebarProvider dir="rtl">
          <SidebarTrigger />
          <AppSidebar />
        </SidebarProvider>
      </div>
    </div>
  );
}
