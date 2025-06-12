import { create } from "zustand";

interface AuthState {
  userName: string | null;
  authenticated: boolean;
  setAuth: (userName: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  userName: null,
  authenticated: false,
  setAuth: (userName) => set({ userName, authenticated: true }),
  logout: () => set({ userName: null, authenticated: false }),
}));
