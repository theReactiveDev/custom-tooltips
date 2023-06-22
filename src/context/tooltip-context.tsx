import { ReactNode, createContext, useState } from "react";

export const TooltipContext = createContext({
  currentStep: 0,
  setCurrentStep: (currentStep: number) => {},
  showTooltips: false,
  setShowTooltips: (showTooltips: boolean) => {},
});

export const TooltipContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showTooltips, setShowTooltips] = useState(
    !localStorage.getItem("onboard")
  );

  return (
    <TooltipContext.Provider
      value={{ currentStep, setCurrentStep, showTooltips, setShowTooltips }}
    >
      {children}
    </TooltipContext.Provider>
  );
};
