import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";

export function DropdownUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-1 ">
          <IoIosArrowDown
            className=" text-primary-palete cursor-pointer "
            size={13}
          />

          <RiUserLine
            className="text-xl text-primary-palete cursor-pointer"
            size={20}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 text-right">
        <Link to="http://localhost:8080/camunda/app/admin/default/#/">
          <DropdownMenuCheckboxItem
            dir="rtl"
            className="cursor-pointer text-right px-2 py-1 "
          >
            حساب کاربری
          </DropdownMenuCheckboxItem>
        </Link>
        <DropdownMenuSeparator />
        <Link to="http://localhost:8080/camunda/app/cockpit/default/#/dashboard">
          <DropdownMenuCheckboxItem
            dir="rtl"
            className="cursor-pointer text-right px-2 py-1 "
          >
            خروج از حساب
          </DropdownMenuCheckboxItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
