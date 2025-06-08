import { create } from "zustand";
interface TasklistLayoutState {
  isSidebarOpen: boolean;
  isDetailOpen: boolean;
  isTasklistOpen: boolean;
  toggleSidebar: () => void;
  toggleDetail: () => void;
  toggleTasklist: () => void;
  setSidebarOpen: (state: boolean) => void;
  setDetailOpen: (state: boolean) => void;
  setTasklistOpen: (state: boolean) => void;
}
export const useTasklistLayoutStore = create<TasklistLayoutState>((set) => ({
  isSidebarOpen: true,
  isDetailOpen: true,
  isTasklistOpen: true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleDetail: () => set((state) => ({ isDetailOpen: !state.isDetailOpen })),
  toggleTasklist: () =>
    set((state) => ({ isTasklistOpen: !state.isTasklistOpen })),
  setSidebarOpen: (state) => set({ isSidebarOpen: state }),
  setDetailOpen: (state) => set({ isDetailOpen: state }),
  setTasklistOpen: (state) => set({ isTasklistOpen: state }),
}));
