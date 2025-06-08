import { ToolTip } from "@/components/common/Tooltip";
import { type Filter } from "@/types/types";
import { FiEdit2 } from "react-icons/fi";

interface FilterItemProps {
  filter: Filter;
}

export default function FilterItem({ filter }: FilterItemProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <ToolTip content={filter.name} className="">
        <div className="flex items-center gap-2">
          <p>{filter.name}</p>
          <p className="text-gray-500">{`(${filter.count})`}</p>
        </div>
      </ToolTip>
      <FiEdit2 className="text-green-800 hover:opacity-80 transition-all duration-300 cursor-pointer" />
    </div>
  );
}
