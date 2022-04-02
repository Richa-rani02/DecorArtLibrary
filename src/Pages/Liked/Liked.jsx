import "../WatchLater/WatchLater.css";
import { VideoCard, Sidebar } from "../../components/index";
import { useStateContext} from "../../context/state-context";

export const Liked=()=>{
    const {state}=useStateContext();
    return(
        <>
        <Sidebar />
            <section className="category-video">
                
                <div className="category-video-container">
                    {state.liked.map((clip) => (
                        <VideoCard key={clip._id} videos={clip} />
                    ))}
                </div>
            </section>
        </>
    )
}