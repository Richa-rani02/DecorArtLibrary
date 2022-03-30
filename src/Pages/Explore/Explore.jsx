import "./Explore.css";
import { CategoryChip, VideoCard } from "../../components";
import { useStateContext } from "../../context/state-context";

const Explore = () => {
    const {state:{videos}}=useStateContext();

    return (
        <div className="explore">
            <div className="navigation_videolist_panel">
             <div className="navigation_panel">
             </div>
             <div className="videolist_panel bottom-gutter-md">
             <CategoryChip />
             <section className="category-video">
                    <div className="category-video-container">
                    {videos.map((clip)=>(
                    <VideoCard key={clip._id} videos={clip}/>
                ))}
                </div>
            </section>
             </div>
            </div>
            </div>
        
    )
}

export { Explore };