import "./App.css";
import {Routes,Route} from "react-router-dom";
import Mockman from "mockman-js";
import {Home,Explore,Login,WatchLater,VideoPage,History,Liked,Playlists,Playlistvideo,Error404} from "./Pages/index";
import {Header} from "./components/index";
import {ToasterWrapper} from "./Utils/ToastWrapper";
function App() {
  return (
    <div className="App">
      <Header/>
      <ToasterWrapper/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/mock" element={<Mockman />}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/video/:videoId" element={<VideoPage/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/liked" element={<Liked/>}/>
        <Route path="/playlist" element={<Playlists/>}/>
        <Route path="/playlist/:playlistId" element={<Playlistvideo/>}/>
        <Route path="/*" element={<Error404/>} />

      </Routes>
    </div>
  );
}

export default App;
