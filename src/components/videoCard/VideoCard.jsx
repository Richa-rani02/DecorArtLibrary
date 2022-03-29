import "./VideoCard.css";
import {HiDotsVertical} from "react-icons/hi";
import {MdPlayCircleFilled} from "react-icons/md";
export const VideoCard=({videos})=>{
    return(
        <div className="video-card top-gutter-md">
         <div className="img-container">
          <img src={videos.thumbnail} alt="video" className="clip"/>
         <MdPlayCircleFilled className="play-button"/>
         <span className="video-duration">{videos.duration}</span>
         </div>
         <div className="video-desc flex-col top-gutter-sm">
             <h3 className="video-title bottom-gutter-xs">{videos.title}</h3>
             <span className="created-by">{videos.creator}</span>
             <div className="video-detail">
                 <span>{videos.views} Views | 3months ago</span>
                 <span>
                 <HiDotsVertical size={24}/>
                 </span>
             </div>
        </div>
        </div>
    )
}