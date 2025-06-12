import { useSidebar } from "@/components/ui/sidebar";
import { GoSidebarCollapse } from "react-icons/go";

export function CustomMobileTrigger() {
  const { toggleSidebar } = useSidebar();
  return (
    <button onClick={toggleSidebar} className=" ">
      <GoSidebarCollapse
        size={28}
        className="text-custom-primary cursor-pointer "
      />
    </button>
  );
}
