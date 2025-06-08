import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function ToolTip({
  content,
  children,
  className,
}: {
  content: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild className={cn(" ", className)}>
        {children}
      </TooltipTrigger>
      <TooltipContent className="bg-green-900">
        <p>
          <p>{content}</p>
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
