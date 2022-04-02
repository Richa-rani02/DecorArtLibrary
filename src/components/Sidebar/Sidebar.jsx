import {Link} from "react-router-dom";
import {ImHome} from "react-icons/im";
import {RiPlayListAddFill,RiHistoryLine} from "react-icons/ri";
import {MdExplore} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import { useStateContext } from "../../context/state-context";
import { BiLike} from "react-icons/bi";
import "./Sidebar.css";
export const Sidebar=()=>{
    const { state: { videos, searchVideo, sortby }, drawer } = useStateContext();
    return(
        <div className={`navigation_panel ${drawer && 'active'}`}>
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
                <Link to="">
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