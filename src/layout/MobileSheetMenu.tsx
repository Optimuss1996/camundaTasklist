import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { RxHamburgerMenu } from "react-icons/rx";
import { VscHome } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import { ModalShortCut } from "@/components/common/ModalShortCut";
import { CiCircleList } from "react-icons/ci";
export function MobileSheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <RxHamburgerMenu size={24} />
      </SheetTrigger>
      <SheetContent className="w-[200px] sm:hidden mx-auto">
        <SheetHeader></SheetHeader>

        <Accordion type="single" collapsible className="w-3/4 mx-auto">
          {/* item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="[&[data-state=open]>svg]:rotate-none">
              <VscHome size={20} />
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <Link to="http://localhost:8080/camunda/app/admin/default/#/">
                <div className=" cursor-pointer text-right">
                  <div className="flex items-center gap-1 text-right">
                    <span>رفتن به</span>
                    <span>Admin</span>
                  </div>
                </div>
              </Link>

              <Link to="http://localhost:8080/camunda/app/cockpit/default/#/dashboard">
                <div className=" cursor-pointer text-right">
                  <div className="flex items-center gap-1 text-right text-sm ">
                    <span>رفتن به</span>
                    <span>Cockpit</span>
                  </div>
                </div>
              </Link>
            </AccordionContent>
          </AccordionItem>
          {/* item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="[&[data-state=open]>svg]:rotate-none">
              <RiUserLine size={20} />
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <Link to="http://localhost:8080/camunda/app/admin/default/#/">
                <div className=" cursor-pointer">حساب کاربری</div>
              </Link>

              <Link to="http://localhost:8080/camunda/app/cockpit/default/#/dashboard">
                <div className="  cursor-pointer">خروج از حساب</div>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-col gap-6 w-3/4 mx-auto">
          <Link to="http://localhost:8080/camunda/app/admin/default/#/">
            <div className=" flex items-center gap-2">
              <CiCircleList
                className="text-xl text-primary-palete cursor-pointer"
                size={20}
              />
              <p className=" text-sm md:text-base">شروع فرایند</p>
            </div>
          </Link>
          <ModalShortCut />
        </div>
        <SheetFooter>
          <p className="text-sm font-bold text-green-800 text-center px-4 py-2">
            Camunda tasklist
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
