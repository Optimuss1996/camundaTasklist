import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface ModalWrapperProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ModalWrapper({
  children,
  open,
  onOpenChange,
}: ModalWrapperProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/50" />
      <DialogContent className="w-full h-svh md:min-h-[800px] sm:max-w-[425px]">
        {children}
      </DialogContent>
    </Dialog>
  );
}
