import { ConstructorPage } from "./pages";
import { TooltipContextProvider } from "./context";
import { TooltipsMock } from "./shared/mocks";

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
