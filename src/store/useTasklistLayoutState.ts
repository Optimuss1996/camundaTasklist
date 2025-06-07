import { create } from "zustand";
interface TasklistLayoutState {
  isSidebarOpen: boolean;
  isDetailOpen: boolean;
  toggleSidebar: () => void;
  toggleDetail: () => void;
  setSidebarOpen: (state: boolean) => void;
  setDetailOpen: (state: boolean) => void;
}
export const useTasklistLayoutStore = create<TasklistLayoutState>((set) => ({
  isSidebarOpen: true,
  isDetailOpen: true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleDetail: () => set((state) => ({ isDetailOpen: !state.isDetailOpen })),
  setSidebarOpen: (state) => set({ isSidebarOpen: state }),
  setDetailOpen: (state) => set({ isDetailOpen: state }),
}));
