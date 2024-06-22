import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user-info")),
    login: (user) => {
        console.log("Logging in user:", user);  // Add this line
        set({ user });
    },
    logout: () => set({ user: null }),
    setUser: (user) => set({ user })
}));

export default useAuthStore