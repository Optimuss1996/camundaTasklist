import { MdArrowBackIosNew } from "react-icons/md";
import { TiPlus } from "react-icons/ti";

export default function SidebarHeader() {
  return (
    <div className="flex justify-between items-center w-full bg-secondary-palete px-3 py-1 rounded-md">
      <div className="flex items-center gap-1 text-accent-foreground">
        <p className="text-sm">ساخت فیلتر جدید</p>
        <TiPlus size={15} />
      </div>
      <MdArrowBackIosNew size={15} />
    </div>
  );
}
