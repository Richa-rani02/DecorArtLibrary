import "./WatchLater.css";
import { VideoCard, Sidebar } from "../../components/index";
import { useStateContext } from "../../context/state-context";
export const WatchLater = () => {
    const { state} = useStateContext();
    return (
        <>
            <Sidebar />
            <section className="category-video">
                <div className="category-video-container">
                    {state.watchLater.map((clip) => (
                        <VideoCard key={clip._id} videos={clip} />
                    ))}
                </div>
            </section>
        </>
    )
}