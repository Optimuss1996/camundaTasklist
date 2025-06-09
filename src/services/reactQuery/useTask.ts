import { useQuery } from "@tanstack/react-query";
import { camundaService } from "../camundaService";
export const useGetTaskByFilterId = (filterId: string) => {
  return useQuery({
    queryKey: ["tasks", filterId],
    queryFn: () => camundaService.getTaskByFilterId(filterId),
    enabled: !!filterId,
  });
};
