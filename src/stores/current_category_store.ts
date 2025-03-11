import { create } from "zustand"

type CurrentCategoryStore = {
  id: number;
  setCategory(id: number): void;
}

export const useCurrentCategoryStore = create<CurrentCategoryStore>((set) => ({
  id: -1,
  setCategory: (id) => {
    set({ id: id });
  },
}));
