import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipProps {
  children: React.ReactNode;
}

export default function TooltipWrapper({ children }: TooltipProps) {
  return (
    <TooltipProvider delayDuration={1000}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side="top"
          className="text-xs leading-relaxed max-w-[200px] px-4 py-3 text-right flex flex-col  "
        >
          <p>اولویت خیلی بالا🔴</p>
          <p>اولویت بالا🟠</p>
          <p>اولویت معمولی🟡</p>
          <p>اولویت پایین🔵</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
