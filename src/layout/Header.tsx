import { CustomTriggerMobileSidebar } from "@/components/ui/CustomTriggerMobileSidebar";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-custom-neutral04 shadow-[0px_15px_29px_21px_rgba(8,_11,_14,_0.06)] h-16 w-full px-4">
      <div className="flex items-center justify-center">
        <CustomTriggerMobileSidebar />
      </div>

      <div className="flex items-center justify-center">
        <img src="/images/logo/HafariLogo.png" alt="logo" className="w-24" />
      </div>
    </div>
  );
}
