import "./WatchLater.css";
import { VideoCard, Sidebar } from "../../components/index";
import { useStateContext } from "../../context/state-context";
export const Playlists = () => {
    const { state} = useStateContext();
    return (
        <>
            <Sidebar />
            <section className="category-video">
                <div className="category-video-container">
                    {state.playlists.map((clip) => (
                        <VideoCard key={clip._id} videos={clip} />
                    ))}
                </div>
            </section>
        </>
    )
}