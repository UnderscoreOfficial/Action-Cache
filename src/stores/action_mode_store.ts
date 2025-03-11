import { create } from "zustand"

type Mode = "" | "edit" | "delete";

type ActionModeStore = {
  mode: Mode;
  setMode(mode: Mode): void;
}

export const useActionModeStore = create<ActionModeStore>((set) => ({
  mode: "",
  setMode: (mode) => {
    set({ mode: mode });
  },
}));
