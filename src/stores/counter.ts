import { create } from "zustand/react";

export type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCountStore = create<CountStore>()((set) => {
  return {
    count: 0,
    increment: () => {
      set((state) => {
        return { count: state.count + 1 };
      });
    },
    decrement: () => {
      set((state) => {
        return { count: state.count - 1 };
      });
    },
  };
});
