import axios from "axios";

const BASE_URL = "/engine-rest";

export interface Task {
  id: string;
  name: string;
  assignee: string | null;
  created: string;
  due: string | null;
  description: string | null;
}

export const camundaService = {
  // دریافت لیست تسک‌ها
  getTasks: async (): Promise<Task[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/task`);
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  },

  // دریافت یک تسک خاص
  getTaskById: async (taskId: string): Promise<Task> => {
    try {
      const response = await axios.get(`${BASE_URL}/task/${taskId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching task ${taskId}:`, error);
      throw error;
    }
  },

  // تکمیل یک تسک
  completeTask: async (taskId: string, variables: Record<string, any> = {}) => {
    try {
      const response = await axios.post(`${BASE_URL}/task/${taskId}/complete`, {
        variables: Object.entries(variables).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: { value },
          }),
          {}
        ),
      });
      return response.data;
    } catch (error) {
      console.error(`Error completing task ${taskId}:`, error);
      throw error;
    }
  },
};
