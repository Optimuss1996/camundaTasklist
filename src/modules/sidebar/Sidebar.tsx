import { useTasklistLayoutStore } from "@/store/useTasklistLayoutState";

import { TiPlus } from "react-icons/ti";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useTasklistLayoutStore();
  return (
    <div className=" h-screen px-2 py-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="text-sm">ساخت فیلتر جدید</p>
          <TiPlus size={15} />
        </div>
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <MdKeyboardArrowRight size={25} />
          ) : (
            <MdKeyboardArrowLeft size={25} />
          )}
        </button>
      </div>
    </div>
  );
}
