import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { camundaService } from "../services/camundaService";

export const TaskList = () => {
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | null>(null);

  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: camundaService.getTasks,
  });

  const completeTaskMutation = useMutation({
    mutationFn: (taskId: string) => camundaService.completeTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (err) => {
      setError("خطا در تکمیل تسک");
      console.error(err);
    },
  });

  if (isLoading)
    return <div className="text-center py-4">در حال بارگذاری...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="task-list">
      <h2 className="text-2xl font-bold mb-4">لیست تسک‌ها</h2>
      {tasks?.length === 0 ? (
        <p className="text-gray-500">تسکی یافت نشد</p>
      ) : (
        <ul className="space-y-4">
          {tasks?.map((task) => (
            <li key={task.id} className="task-item">
              <div>
                <h3 className="text-lg font-semibold text-secondary-foreground-palete">
                  {task.name}
                </h3>
                <p className="text-gray-600">
                  توضیحات: {task.description || "بدون توضیحات"}
                </p>
                <p className="text-gray-600">
                  تاریخ ایجاد: {new Date(task.created).toLocaleString("fa-IR")}
                </p>
                {task.due && (
                  <p className="text-gray-600">
                    مهلت: {new Date(task.due).toLocaleString("fa-IR")}
                  </p>
                )}
              </div>
              <button
                onClick={() => completeTaskMutation.mutate(task.id)}
                className="complete-button"
                disabled={completeTaskMutation.isPending}
              >
                {completeTaskMutation.isPending
                  ? "در حال تکمیل..."
                  : "تکمیل تسک"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
