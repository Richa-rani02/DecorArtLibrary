import "./App.css";
import {Header} from "./components/index";
import { AllRoutes } from "./routes/AllRoutes";
import {ToasterWrapper} from "./Utils/ToastWrapper";
import {useLocation} from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="App">
     {location.pathname !== "/" && <Header/>
    }
      <ToasterWrapper/>
      <AllRoutes/>
    </div>
  );
}

export default App;
