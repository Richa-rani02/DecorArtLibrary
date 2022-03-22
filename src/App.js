import "./App.css";
import {Routes,Route} from "react-router-dom";
import Mockman from "mockman-js";
import {Home} from "./Pages/index";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Mockman />}/>
      </Routes>
    </div>
  );
}

export default App;
