import "../WatchLater/WatchLater.css";
import { VideoCard, Sidebar } from "../../components/index";
import { useStateContext} from "../../context/state-context";
import { useAuth } from "../../context/auth-context";
import {clearAllHistory} from "../../services/historyServices";
import {useLocation} from "react-router-dom";
import {Empty} from "../index";
export const History=()=>{
    const location=useLocation();
    const {state,dispatch}=useStateContext();
    const {authState:{token}}=useAuth();
    const clearAllHandler=()=>{
      state.history.length>0 && clearAllHistory(dispatch,token);
    }
    return(
        <>
         <Sidebar />
         {state.history.length>0 ?
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
    :
    <Empty path={location.pathname}/>
    }
            
        </>
    )
}