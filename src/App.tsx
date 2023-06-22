import ConstructorPage from "./pages/ConstructorPage/ConstructorPage";

import "./App.scss";
import { TooltipContextProvider } from "./context/tooltip-context";

function App() {
  return (
    <div className="App">
      <TooltipContextProvider settings={{ delay: 5 }}>
        <ConstructorPage />
      </TooltipContextProvider>
    </div>
  );
}

export default App;
