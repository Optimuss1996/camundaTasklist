import { useSearchParams } from "react-router-dom";
import { useGetTaskByFilterId } from "../../services/reactQuery/useUserTask";
export default function TaskListItems() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const { data: tasks } = useGetTaskByFilterId(filter || "");
  console.log(tasks);

  return (
    <div className="flex flex-col  gap-4 mt-6 w-full">
      {tasks?.map((task) => (
        <div className="min-h-[200px] flex flex-col justify-between gap-1 w-full items-center  border-2 border-gray-200 rounded-xl p-4">
          <h3 key={task.id} className="w-full text-left text-lg">
            {task.name}
          </h3>
          <div className="flex items-center justify-between w-full">
            <p className="text-sm text-gray-700 text-left w-full">demo demo</p>
            <p className="text-sm text-gray-700 text-left w-full">
              Review Invoice
            </p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-sm text-gray-700 text-left w-full">
              {task.priority}
            </p>
            <p className="text-sm text-gray-700 text-left w-full">
              created 3 days ago
            </p>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold">Invoice Number</p>
              <p className="text-sm text-gray-500">10.99</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold">Invoice Amount</p>
              <p className="text-sm text-gray-500">3BE-45CL</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
