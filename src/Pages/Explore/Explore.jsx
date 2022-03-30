import "./Explore.css";
import { CategoryChip, VideoCard } from "../../components";
import { useStateContext } from "../../context/state-context";

const Explore = () => {
    const {state:{videos}}=useStateContext();

    return (
        <div className="explore">
            <div className="navigation_videolist_panel">
             <div className="naviation_panel">
            

             </div>
             <div className="videolist_panel">
             <CategoryChip />
            <section className="category-video">
                    <h4 className="category-name">Mandala Designs</h4>
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