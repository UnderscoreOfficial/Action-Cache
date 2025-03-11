import { ActionsReturn } from "@/actions/database";
import { Actions } from "@prisma/client";
import { create } from "zustand"

type ActionsStore = {
  actions: Actions[];
  loading: boolean;
  set(actions: ActionsReturn): void;
}

export const useActionsStore = create<ActionsStore>((set) => ({
  actions: [],
  loading: true,
  set: async (actions) => {
    set({ loading: true });
    if (actions.status.success && actions.data) {
      set({ actions: actions.data, loading: false });
    } else {
      console.error(actions.status.message);
    }
  },
}));
