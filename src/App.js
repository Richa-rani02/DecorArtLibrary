import "./App.css";
import {Header} from "./components/index";
import { AllRoutes } from "./routes/AllRoutes";
import {ToasterWrapper} from "./Utils/ToastWrapper";
function App() {
  return (
    <div className="App">
      <Header/>
      <ToasterWrapper/>
      <AllRoutes/>
    </div>
  );
}

export default App;
