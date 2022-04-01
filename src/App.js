import "./App.css";
import {Routes,Route} from "react-router-dom";
import Mockman from "mockman-js";
import {Home,Explore,Login,WatchLater,VideoPage} from "./Pages/index";
import {Header} from "./components/index";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/mock" element={<Mockman />}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/videos" element={<VideoPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
