import { useQuery } from "@tanstack/react-query";
import { camundaService } from "@/services/camundaService";

function useSessionQuery() {
  return useQuery({
    queryKey: ["session"],
    queryFn: camundaService.checkSession,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}

export default useSessionQuery;
