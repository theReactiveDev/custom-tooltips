import { ReactNode, createContext, useEffect, useState } from "react";
import { Settings, Tooltip } from "../shared/types";

interface ITooltipContext {
  currentStep: number;
  showTooltips: boolean;
  tooltipData: Tooltip[];
  setCurrentStep: (value: number) => void;
  setShowTooltips: (value: boolean) => void;
}

export const TooltipContext = createContext<ITooltipContext>({
  currentStep: 0,
  setCurrentStep: (currentStep) => {},
  showTooltips: false,
  setShowTooltips: (showTooltips) => {},
  tooltipData: [],
});

export const TooltipContextProvider = ({
  children,
  tooltips,
  settings,
}: {
  children: ReactNode;
  tooltips: Tooltip[];
  settings?: Settings;
}) => {
  const [tooltipData] = useState(tooltips);
  const [currentStep, setCurrentStep] = useState(1);
  const [showTooltips, setShowTooltips] = useState(
    getTooltipInitialState(settings)
  );
  function getTooltipInitialState(setting?: Settings) {
    if (setting?.delay) {
      return false;
    } else return !localStorage.getItem("onboard");
  }

  useEffect(() => {
    if (!localStorage.getItem("onboard") && settings?.delay) {
      const timerId = setTimeout(() => {
        setShowTooltips(true);
      }, settings.delay * 1000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, []);

  return (
    <TooltipContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        showTooltips,
        setShowTooltips,
        tooltipData,
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
};
