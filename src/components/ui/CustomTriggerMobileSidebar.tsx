import { RxHamburgerMenu } from "react-icons/rx";
import { useSidebar } from "@/components/ui/sidebar";

export function CustomTriggerMobileSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar} className="block md:hidden">
      <RxHamburgerMenu
        size={28}
        className="text-custom-primary cursor-pointer "
      />
    </button>
  );
}
