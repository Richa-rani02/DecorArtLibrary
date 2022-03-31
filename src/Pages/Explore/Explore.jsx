import "./Explore.css";
import { CategoryChip, VideoCard,Sidebar } from "../../components";
import { useStateContext } from "../../context/state-context";
import { searchVideos } from "./helper";
const Explore = () => {
    const {state:{videos,searchVideo},drawer}=useStateContext();

    const searchbyName=searchVideos(videos,searchVideo);

    return (
        <div className="explore">
            <div className="navigation_videolist_panel">
             <div className={`navigation_panel ${drawer && 'active'}`}>
              <Sidebar/>
             </div>
             <div className="videolist_panel bottom-gutter-md">
             <CategoryChip />
             <section className="category-video">
                    <div className="category-video-container">
                    {searchbyName.map((clip)=>(
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