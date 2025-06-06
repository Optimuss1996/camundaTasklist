import { useEffect, useState } from "react";
import { camunda } from "./api/api";

interface Task {
  id: string;
  name: string;
  assignee: string | null;
}

interface Props {
  username: string;
  password: string;
}

const TaskList: React.FC<Props> = ({ username, password }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    camunda(username, password)
      .get<Task[]>("/task")
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت وظایف:", err);
        setLoading(false);
      });
  }, [username, password]);

  if (loading) return <p>در حال دریافت وظایف...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>لیست وظایف</h2>
      {tasks.length === 0 ? (
        <p>هیچ وظیفه‌ای یافت نشد.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.name}</strong> – {task.assignee || "بدون مسئول"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
