import "./HorizontalCard.css";
import { MdOutlineDelete } from "react-icons/md";
import {removeVideosFromPlaylist,addToHistory } from "../../services/index";
import { useStateContext } from "../../context/state-context";
import { useAuth } from "../../context/auth-context";
import { isInList } from "../videoCard/helper";
import { useNavigate } from "react-router-dom";
export const HorizontalCard=({videos,listId})=>{

const {state:{history},dispatch}=useStateContext();
const {authState:{token}}=useAuth();
const navigate = useNavigate();
const isInHistory = isInList(history,videos._id);
const videoClickHandler = () => {
    navigate(`/video/${videos._id}`);
    token && !isInHistory && addToHistory(dispatch, token, videos);
}
    return(
        <>
       <div className="video-horizontal-card">
          <div className="horizontal-img" onClick={() => videoClickHandler()} >
          <img src={`https://img.youtube.com/vi/${videos._id}/0.jpg`} alt="video" className="img-responsive" />
          </div>
          <h4 className="video-title title-width">{videos.title}</h4>
          <MdOutlineDelete size={24} onClick={()=>removeVideosFromPlaylist(dispatch,token,listId,videos._id)}/>
       </div>
       <hr/>
       </>
    )
}