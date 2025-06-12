import { GoSidebarCollapse } from "react-icons/go";
import { useSidebar } from "@/components/ui/sidebar";
export function CustomTriggerDeskTopSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className=" hidden md:block absolute top-0 -left-4"
    >
      <GoSidebarCollapse
        size={28}
        className="text-custom-primary cursor-pointer "
      />
    </button>
  );
}
