import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface ModalWrapperProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: () => void;
}

export function ModalWrapper({
  children,
  open,
  onOpenChange,
}: ModalWrapperProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/50" />
      <DialogContent className="w-full min-h-svh sm:min-h-[600px] sm:min-w-[425px]">
        {children}
      </DialogContent>
    </Dialog>
  );
}
