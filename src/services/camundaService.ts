import type {
  ProcessDefinition,
  ProcessInstanceHistory,
  Task,
} from "@/types/types";
import axiosInstance from "@/api/axiosInstance";

export const camundaService = {
  login: async (username: string, password: string) => {
    const response = await axiosInstance.post("/identity/verify", {
      username,
      password,
    });
    console.log("response", response.data);

    return response.data;
  },

  checkSession: async (): Promise<{
    authenticated: boolean;
    authenticatedUser?: string;
  }> => {
    const response = await axiosInstance.get("/identity/verify");
    return response.data;
  },
  getUserTasks: async (assignee: string): Promise<Task[]> => {
    const response = await axiosInstance.get(`/task`, {
      params: {
        assignee,
        includeProcessVariables: true,
      },
    });
    return response.data;
  },

  getProcessDefinitionById: async (id: string): Promise<ProcessDefinition> => {
    const response = await axiosInstance.get(`/process-definition/${id}`);
    return response.data;
  },

  getProcessInstanceById: async (
    id: string
  ): Promise<ProcessInstanceHistory> => {
    const response = await axiosInstance.get(`/history/process-instance/${id}`);
    return response.data;
  },
};
