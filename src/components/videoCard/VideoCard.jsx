import "./VideoCard.css";
import {HiDotsVertical} from "react-icons/hi";
import {MdPlayCircleFilled} from "react-icons/md";
export const VideoCard=()=>{
    return(
        <div className="video-card top-gutter-md">
         <div className="img-container">
          <img src="https://img.youtube.com/vi/mnpLhfEDnrc/hqdefault.jpg" alt="video" className="clip"/>
         <MdPlayCircleFilled className="play-button"/>
         <span className="video-duration">3:50</span>
         </div>
         <div className="video-desc flex-col top-gutter-sm">
             <h3 className="video-title bottom-gutter-xs">Titleerrerrrrrr teshsygshsshbsggtsgssggshsbgsgtsgst</h3>
             <span className="created-by">demo</span>
             <div className="video-detail">
                 <span>2.1M Views | 3months ago</span>
                 <span>
                 <HiDotsVertical size={24}/>
                 </span>
             </div>
        </div>
        </div>
    )
}