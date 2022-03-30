import {Link} from "react-router-dom";
import {ImHome} from "react-icons/im";
import {RiPlayListAddFill,RiHistoryLine} from "react-icons/ri";
import {MdExplore} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import "./Sidebar.css";
export const Sidebar=()=>{
    return(
        <ul className="nav-lists list-style-none">
            <li>
                <Link to="">
                <ImHome className="icon-size"/>
               <span className="links_name">Home</span>
                </Link>
            </li>
            <li>
                <Link to="">
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
                <Link to="">
                <RiHistoryLine className="icon-size"/>
               <span className="links_name">History</span>
                </Link>
            </li>
            <li>
                <Link to="">
                <AiOutlineClockCircle className="icon-size"/>
               <span className="links_name">Watch Later</span>
                </Link>
            </li>
        </ul>
    )
}