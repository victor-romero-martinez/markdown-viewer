import { create } from "zustand";

type State = {
  elementHide: "none" | "editor" | "preview";
  lastElement: "none" | "editor" | "preview";
};

type Action = {
  update: (elementHide: State["elementHide"]) => void;
};

export const useStore = create<State & Action>()((set) => ({
  elementHide: "none",
  lastElement: "none",

  update: (element) =>
    set((state) => {
      const newElement = element !== state.elementHide ? element : "none";

      return { elementHide: newElement, lastElement: element };
    }),
}));
