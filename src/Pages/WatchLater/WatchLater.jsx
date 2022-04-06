import "./WatchLater.css";
import { VideoCard, Sidebar } from "../../components/index";
import { useStateContext } from "../../context/state-context";
import { useLocation } from "react-router-dom";
import {Empty} from "../index";
export const WatchLater = () => {
    const { state} = useStateContext();
    const location = useLocation();
    return (
        <> 
        <Sidebar />
        {state.watchLater.length>0 ?
        
        <section className="category-video">
            <div className="category-video-container">
                {state.watchLater.map((clip) => (
                    <VideoCard key={clip._id} videos={clip} />
                ))}
            </div>
        </section>
        :
        <Empty path={location.pathname}/>
        }
            
        </>
    )
}