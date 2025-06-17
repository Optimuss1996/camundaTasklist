import { useQuery } from "@tanstack/react-query";
import { camundaService } from "@/services/camundaService";
import type { ProcessDefinition } from "@/types/types";

export const useProcessDefinition = (username: string) => {
  return useQuery<ProcessDefinition[], Error>({
    queryKey: ["process", "startable", username],
    queryFn: () => camundaService.getStartAbleProcesses(username),
    enabled: !!username,
  });
};
