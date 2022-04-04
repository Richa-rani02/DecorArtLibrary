import "./HorizontalCard.css";
import { MdOutlineDelete } from "react-icons/md";
import {removeVideosFromPlaylist } from "../../services/index";
import { useStateContext } from "../../context/state-context";
import { useAuth } from "../../context/auth-context";
export const HorizontalCard=({videos,listId})=>{
const {dispatch}=useStateContext();
const {authState:{token}}=useAuth();

    return(
        <>
       <div className="video-horizontal-card">
          <div className="horizontal-img">
          <img src={`https://img.youtube.com/vi/${videos._id}/0.jpg`} alt="video" className="img-responsive" />
          </div>
          <h4 className="video-title title-width">{videos.title}</h4>
          <MdOutlineDelete size={24} onClick={()=>removeVideosFromPlaylist(dispatch,token,listId,videos._id)}/>
       </div>
       <hr/>
       </>
    )
}