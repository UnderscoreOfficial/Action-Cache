import { CategoriesReturn } from "@/actions/database";
import { Categories } from "@prisma/client";
import { create } from "zustand"


type CategoriesStore = {
  categories: Categories[];
  loading: boolean;
  set(categories: CategoriesReturn): void;
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  categories: [],
  loading: true,
  set: async (categories) => {
    set({ loading: true });
    if (categories.status.success && categories.data) {
      set({ categories: categories.data, loading: false });
    } else {
      console.error(categories.status.message);
    }
  },
}));
