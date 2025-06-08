import type { Filter, Task } from "@/types/types";
import axios from "axios";

const BASE_URL = "/engine-rest";

export const camundaService = {
  // get all tasks
  getTasks: async (): Promise<Task[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/task`);
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  },

  // get a specific task
  getTaskById: async (taskId: string): Promise<Task> => {
    try {
      const response = await axios.get(`${BASE_URL}/task/${taskId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching task ${taskId}:`, error);
      throw error;
    }
  },

  // complete a task
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
  //
  //
  //
  //
  // ALL FILTERS QUERY🚨

  // get all filters
  getFilters: async (): Promise<Filter[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/filter`);
      return response.data;
    } catch (error) {
      console.error("Error fetching filters:", error);
      throw error;
    }
  },
  // count filters
  countFilters: async (id: string): Promise<number> => {
    try {
      const response = await axios.get(`${BASE_URL}/filter/${id}/count`);
      console.log("Filter count API response:", response.data);
      return response.data.count;
    } catch (error) {
      console.error("Error fetching count filters:", error);
      throw error;
    }
  },

  getFilterById: async (id: string): Promise<Filter> => {
    try {
      const response = await axios.get(`${BASE_URL}/filter/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching filter by id:", error);
      throw error;
    }
  },

  getTaskByFilterId: async (id: string): Promise<Task[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/filter/${id}/list`);
      return response.data;
    } catch (error) {
      console.error("Error fetching task by filter id:", error);
      throw error;
    }
  },

  createFilter: async (filter: Filter): Promise<Filter> => {
    try {
      const response = await axios.post(`${BASE_URL}/filter/create`, filter);
      return response.data;
    } catch (error) {
      console.error("Error creating filter:", error);
      throw error;
    }
  },

  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  getFiltersWithCount: async (): Promise<Filter[]> => {
    try {
      const response = await axios.get<Filter[]>(`${BASE_URL}/filter`);

      const filters = response.data;

      const filtersWithCount = await Promise.all(
        filters.map(async (filter) => {
          try {
            const countRes = await axios.get<{ count: number }>(
              `${BASE_URL}/filter/${filter.id}/count`
            );
            return { ...filter, count: countRes.data.count };
          } catch (err) {
            console.warn(
              `Error fetching count for filter ${filter.name}:`,
              err
            );
            return { ...filter, count: 0 };
          }
        })
      );

      return filtersWithCount;
    } catch (error) {
      console.error("Error fetching filters:", error);
      throw error;
    }
  },
};
