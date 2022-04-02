import "../WatchLater/WatchLater.css";
import { VideoCard, Sidebar } from "../../components/index";
import { useStateContext} from "../../context/state-context";
import { useAuth } from "../../context/auth-context";
import {clearAllHistory} from "../../services/historyServices";
import {useNavigate} from "react-router-dom";
export const History=()=>{
    const navigate=useNavigate();
    const {state,dispatch}=useStateContext();
    const {authState:{token}}=useAuth();
    const clearAllHandler=()=>{
      state.history.length>0 && clearAllHistory(dispatch,token);
    }
    return(
        <>
         <Sidebar />
            <section className="category-video">
                 <div className="clr-btn">
                <button className="btn btn-solid-primary btn-sm btn-rounded-5 shadow-box" onClick={()=>clearAllHandler()}>clearAll</button>
                </div>
                <div className="category-video-container">
                    {state.history.map((clip) => (
                        <VideoCard key={clip._id} videos={clip} />
                    ))}
                </div>
            </section>
        </>
    )
}