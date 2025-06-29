import { useQuery } from "@tanstack/react-query";
import { camundaService } from "@/services/camundaService";
import type { Task, EnrichedTask } from "@/types/types";

export const useEnrichedTasks = (assignee: string) => {
  return useQuery<EnrichedTask[], Error>({
    queryKey: ["enrichedTasks", assignee],
    enabled: !!assignee,
    queryFn: async () => {
      try {
        const tasks: Task[] = await camundaService.getUserTasks(assignee);

        const enrichedTasks: EnrichedTask[] = [];

        for (const task of tasks) {
          try {
            const [processDef, processInstance] = await Promise.all([
              camundaService.getProcessDefinitionById(task.processDefinitionId),
              camundaService.getProcessInstanceById(task.processInstanceId),
            ]);

            enrichedTasks.push({
              id: task.id,
              name: task.name,
              assignee: task.assignee || "",
              created: task.created,
              priority: task.priority,

              processDefinitionId: task.processDefinitionId,
              processDefinitionName: processDef?.name || "نامشخص",
              processDefinitionKey: processDef?.key || "",

              processInstanceId: task.processInstanceId,
              processStarter: processInstance?.startUserId || "نامشخص",
              processStartTime: processInstance?.startTime || "",
            });
          } catch (err) {
            console.error("❌ خطا در enrich کردن task:", task.id, err);
          }
        }

        return enrichedTasks;
      } catch (err) {
        console.error("❌ خطا در گرفتن لیست task ها:", err);

        throw new Error("خطا در دریافت لیست وظایف کاربر.");
      }
    },
  });
};
