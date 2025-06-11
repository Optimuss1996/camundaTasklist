import { AppSidebar } from "@/components/taskboard/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

interface TaskboardProps {
  children: React.ReactNode;
}

export default function Taskboard({ children }: TaskboardProps) {
  return (
    <div className="w-full h-screen bg-custom-neutral05">
      <div className="w-full h-screen bg-custom-neutral05">
        <SidebarProvider dir="rtl">
          <AppSidebar />
          <main>
            <SidebarTrigger dir="rtl" />
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}
