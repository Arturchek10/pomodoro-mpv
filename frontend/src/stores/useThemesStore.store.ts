import { create } from "zustand";
import type { ThemeKey } from "@/constants/theme.constants";
type ThemeState = {
  activeTheme: ThemeKey;
  setActiveTheme: (theme: ThemeKey) => void;
};

const useThemeStore = create<ThemeState>((set) => ({
  activeTheme: "deathnote",
  setActiveTheme: (theme) => set({ activeTheme: theme }),
}));

export default useThemeStore