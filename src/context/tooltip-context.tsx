import { createContext } from "react";

export const TooltipContext = createContext({
  currentStep: 1,
  setTheme: (theme: string) => {},
});
