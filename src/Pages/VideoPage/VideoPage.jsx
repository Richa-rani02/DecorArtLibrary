import "./VideoPage.css";
import { useParams } from "react-router-dom";
import { SingleVideo } from "./SingleVideo";
import { useStateContext } from "../../context/state-context";

export const VideoPage = () => {
    const {state:{videos}}=useStateContext();
    const {videoId}=useParams();
    const video=videos?.find((video)=>video._id===videoId);
    return video?(
        <>
        <div className="video-page">
            <SingleVideo video={video} />
            <div className="notes_container">
                <div className="heading-container">
                    <p className="main-p center-text">Take Notes..✍️</p>
                    <hr />
                </div>
            </div>
        </div>
        </>
    ):(
        <>
        </>
    )
}