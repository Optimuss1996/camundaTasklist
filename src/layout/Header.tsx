import { CustomTriggerMobileSidebar } from "@/components/ui/CustomTriggerMobileSidebar";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-custom-neutral04 shadow-[0px_8px_19px_1px_rgba(149,_157,_165,_0.2)] h-16 w-full px-4 fixed top-0 left-0 right-0 ">
      <div className="flex items-center justify-center">
        <CustomTriggerMobileSidebar />
      </div>

      <div className="flex items-center justify-center">
        <img src="/images/logo/HafariLogo.png" alt="logo" className="w-24" />
      </div>
    </div>
  );
}
