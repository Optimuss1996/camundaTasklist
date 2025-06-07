import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VscHome } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export function DropdownHome() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-1 ">
          <IoIosArrowDown
            className=" text-primary-palete cursor-pointer "
            size={13}
          />

          <VscHome
            className="text-xl text-primary-palete cursor-pointer"
            size={20}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 text-right">
        <Link to="http://localhost:8080/camunda/app/admin/default/#/">
          <DropdownMenuCheckboxItem className=" cursor-pointer text-right px-2 py-1 justify-end">
            <div className="flex items-center gap-1 text-right">
              <span>Admin</span>
              <span>رفتن به</span>
            </div>
          </DropdownMenuCheckboxItem>
        </Link>
        <DropdownMenuSeparator />
        <Link to="http://localhost:8080/camunda/app/cockpit/default/#/dashboard">
          <DropdownMenuCheckboxItem className=" cursor-pointer text-right px-2 py-1 justify-end">
            <div className="flex items-center gap-1 text-right">
              <span>Cockpit</span>
              <span>رفتن به</span>
            </div>
          </DropdownMenuCheckboxItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
