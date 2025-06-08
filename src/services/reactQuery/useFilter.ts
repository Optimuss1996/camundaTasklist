import { useQuery } from "@tanstack/react-query";
import { camundaService } from "../camundaService";
import type { Filter } from "@/types/types";

export const useFilters = () => {
  return useQuery<Filter[], Error>({
    queryKey: ["filters", "all"],
    queryFn: camundaService.getFilters,
  });
};

export const useCountFilter = (id: string) => {
  return useQuery<number, Error>({
    queryKey: ["filters", id, "count"],
    queryFn: () => camundaService.countFilters(id),
    enabled: !!id,
  });
};

export const useFilterById = (id: string) => {
  return useQuery<Filter, Error>({
    queryKey: ["filters", id],
    queryFn: () => camundaService.getFilterById(id),
  });
};
export const useFiltersWithCount = () => {
  return useQuery<Filter[], Error>({
    queryKey: ["filters", "with-count"],
    queryFn: camundaService.getFiltersWithCount,
  });
};
