import { useQuery } from "@tanstack/react-query";
import { camundaService } from "@/services/camundaService";
import type {
  Task,
  EnrichedTask,
  ProcessDefinition,
  ProcessInstanceHistory,
} from "@/types/types";

export const useEnrichedTasks = (assignee: string) => {
  return useQuery<EnrichedTask[], Error>({
    queryKey: ["enrichedTasks", assignee],
    enabled: !!assignee,
    queryFn: async () => {
      const tasks: Task[] = await camundaService.getUserTasks(assignee);

      const enrichedTasks = await Promise.all(
        tasks.map(async (task) => {
          const [processDef, processInstance] = await Promise.all([
            camundaService.getProcessDefinitionById(task.processDefinitionId),
            camundaService.getProcessInstanceById(task.processInstanceId),
          ]);

          const enriched: EnrichedTask = {
            id: task.id,
            name: task.name,
            assignee: task.assignee || "",
            created: task.created,
            priority: task.priority,

            processDefinitionId: task.processDefinitionId,
            processDefinitionName: processDef?.name || "",
            processDefinitionKey: processDef?.key || "",

            processInstanceId: task.processInstanceId,
            processStarter: processInstance?.startUserId || "",
            processStartTime: processInstance?.startTime || "",
          };

          return enriched;
        })
      );

      return enrichedTasks;
    },
  });
};
