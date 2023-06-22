import ConstructorPage from "./pages/ConstructorPage/ConstructorPage";
import { TooltipContextProvider } from "./context/tooltip-context";
import { TooltipsMock } from "./shared/mocks/tooltipsMock";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <TooltipContextProvider tooltips={TooltipsMock} settings={{}}>
        <ConstructorPage />
      </TooltipContextProvider>
    </div>
  );
}

export default App;
