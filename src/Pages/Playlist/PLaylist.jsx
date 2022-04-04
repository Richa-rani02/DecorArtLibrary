import "../WatchLater/WatchLater.css";
import { VideoCard, Sidebar } from "../../components/index";
import { useStateContext } from "../../context/state-context";
import {PlaylistCard} from "./components/PlaylistCard";
import "./Playlist.css";
export const Playlists = () => {
    const { state:{playlists}} = useStateContext();
    return (
        <>
            <Sidebar />
            <section className="category-video">
                <div className="category-video-container">
                  {playlists.map(play=>(
                      <PlaylistCard key={play._id} playlistfolder={play}/>
                  ))}

                </div>
            </section>
        </>
    )
}