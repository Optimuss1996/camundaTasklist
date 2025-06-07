import { Link } from "react-router";

import { CiCircleList } from "react-icons/ci";

import { DropdownHome } from "@/components/common/DropdownHome";
import { DropdownUser } from "@/components/common/DropdownUser";
import { ModalShortCut } from "@/components/common/ModalShortCut";
import { MobileSheetMenu } from "./MobileSheetMenu";
export default function Header() {
  return (
    <div className="w-full px-6 py-4 shadow-[0px_20px_12px_-16px_rgba(0,_0,_0,_0.1)]">
      {/* {"-------------------------start desktop header > md -----------------------------"} */}
      <div className="flex justify-between items-center   ">
        <div className=" hidden sm:flex items-center gap-6">
          <DropdownHome />
          <DropdownUser />
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
        {/* {"-------------------------end desktop header > md -----------------------------"} */}

        {/* {"------------------------- start mobile header > md -----------------------------"} */}
        <div className="block sm:hidden">
          <MobileSheetMenu />
        </div>
        {/* {"------------------------- end mobile header > md -----------------------------"} */}

        <div>
          <p className="text-sm md:text-xl font-Bold text-card-palete bg-green-800 rounded-md px-3 py-2">
            Camunda
          </p>
        </div>
      </div>
    </div>
  );
}
