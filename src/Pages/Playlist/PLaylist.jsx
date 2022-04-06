import "../WatchLater/WatchLater.css";
import { VideoCard, Sidebar } from "../../components/index";
import { useStateContext } from "../../context/state-context";
import {PlaylistCard} from "./components/PlaylistCard";
import "./Playlist.css";
import { useLocation } from "react-router-dom";
import {Empty} from "../index";
export const Playlists = () => {
    const { state:{playlists}} = useStateContext();
    const location = useLocation();
    return (
        <>
            <Sidebar />
            {playlists.length>0?
            <section className="category-video">
            <div className="category-video-container">
              {playlists.map(play=>(
                  <PlaylistCard key={play._id} playlistfolder={play}/>
              ))}

            </div>
        </section>
        :
        <Empty path={location.pathname}/>
            }
            
        </>
    )
}