import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CgShortcut } from "react-icons/cg";
import { ShortCuts } from "@/components/common/ShortCuts";

export function ModalShortCut() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" flex items-center gap-2 cursor-pointer">
          <CgShortcut className="text-xl text-primary-palete " size={20} />
          <p className=" text-sm md:text-base"> میانبر</p>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full h-svh sm:h-auto sm:max-w-2xl ">
        <DialogHeader className="mt-12">
          <DialogTitle className="text-right">کلید های میانبر</DialogTitle>
          <DialogDescription className="text-right">
            کلید های میانبر برای سریع تر کردن کارها
          </DialogDescription>
        </DialogHeader>
        <ShortCuts />
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
