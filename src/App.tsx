import ConstructorPage from "./pages/ConstructorPage/ConstructorPage";

import "./App.scss";
import { TooltipContextProvider } from "./context/tooltip-context";

function App() {
  return (
    <div className="App">
      <TooltipContextProvider>
        <ConstructorPage />
      </TooltipContextProvider>
    </div>
  );
}

export default App;
