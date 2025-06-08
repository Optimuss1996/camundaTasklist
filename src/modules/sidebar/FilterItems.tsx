import { useFiltersWithCount } from "@/services/reactQuery/useFilter";
import { useState } from "react";
import FilterItem from "./FilterItem";

export default function FilterItems() {
  const [activeFilterId, setActiveFilterId] = useState<string | null>(null);

  const { data: filtersWithCount } = useFiltersWithCount();
  console.log("NEW QUERY", filtersWithCount);
  return (
    <div className="flex flex-col items-start mt-3 gap-2 w-full px-2">
      {filtersWithCount?.map((filter) => (
        <div
          key={filter.id}
          onClick={() => setActiveFilterId(filter.id)}
          className={`w-full flex items-center justify-between px-2 py-1 cursor-pointer border-b-2 transition-all duration-300 ${
            activeFilterId === filter.id
              ? "border-b-green-600"
              : "border-b-transparent hover:border-b-gray-300"
          }`}
        >
          <FilterItem filter={filter} />
        </div>
      ))}
    </div>
  );
}
