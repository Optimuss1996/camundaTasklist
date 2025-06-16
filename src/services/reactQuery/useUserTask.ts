import { useQuery } from "@tanstack/react-query";
import { camundaService } from "@/services/camundaService";
import type { Task } from "@/types/types";

export const useGetUserTasks = (assignee: string) => {
  return useQuery<Task[], Error>({
    queryKey: ["tasks", assignee],
    queryFn: () => camundaService.getUserTasks(assignee),
    enabled: !!assignee,
  });
};
