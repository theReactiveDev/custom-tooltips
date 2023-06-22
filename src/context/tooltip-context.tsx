import { ReactNode, createContext, useEffect, useState } from "react";
import { Settings } from "../shared/types/settings";

export const TooltipContext = createContext({
  currentStep: 0,
  setCurrentStep: (currentStep: number) => {},
  showTooltips: false,
  setShowTooltips: (showTooltips: boolean) => {},
  //   settings: {},
});

export const TooltipContextProvider = ({
  children,
  settings,
}: {
  children: ReactNode;
  settings?: Settings;
}) => {
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
        // settings,
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
};
