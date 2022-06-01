import {Link} from "react-router-dom";
import {ImHome} from "react-icons/im";
import {RiPlayListAddFill,RiHistoryLine} from "react-icons/ri";
import {MdExplore} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import { BiLike} from "react-icons/bi";
import { useGlobal } from "../../context/global-context";
import "./Sidebar.css";
export const Sidebar=()=>{
    const {globalState:{drawerActive}}=useGlobal();
    // <div className={`navigation_panel ${drawerActive && 'active'}`}>
    return(
        <div className={`navigation_panel`}>
        <ul className="nav-lists list-style-none">
            <li>
                <Link to="/">
                <ImHome className="icon-size"/>
               <span className="links_name">Home</span>
                </Link>
            </li>
            <li>
                <Link to="/explore">
                <MdExplore className="icon-size"/>
               <span className="links_name">Explore</span>
                </Link>
            </li>
            <li>
                <Link to="/playlist">
                <RiPlayListAddFill className="icon-size"/>
               <span className="links_name">Playlist</span>
                </Link>
            </li>
            <li>
                <Link to="/history">
                <RiHistoryLine className="icon-size"/>
               <span className="links_name">History</span>
                </Link>
            </li>
            <li>
                <Link to="/liked">
                <BiLike className="icon-size"/>
               <span className="links_name">Liked Videos</span>
                </Link>
            </li>
            <li>
                <Link to="/watchlater">
                <AiOutlineClockCircle className="icon-size"/>
               <span className="links_name">Watch Later</span>
                </Link>
            </li>
        </ul>
        </div>
    )
}