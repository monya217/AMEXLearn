import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: (() => {
    try {
      const data = localStorage.getItem("user-info");
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Failed to parse user-info from localStorage:", error);
      return null;
    }
  })(),
  login: (user) => {
    console.log("Logging in user:", user);
    set({ user });
    localStorage.setItem("user-info", JSON.stringify(user));
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem("user-info");
  },
  setUser: (user) => {
    set({ user });
    localStorage.setItem("user-info", JSON.stringify(user));
  },
}));

export default useAuthStore;
