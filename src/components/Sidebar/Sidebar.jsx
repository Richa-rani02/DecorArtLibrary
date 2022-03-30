import {Link} from "react-router-dom";
import {ImHome} from "react-icons/im";
export const Sidebar=()=>{
    return(
        <ul className="nav-lists ">
            <li>
                <Link to="">
                <ImHome/>
               <span className="links_name">Home</span>
                </Link>
            </li>
            <li>
                <Link to="">
                <ImHome/>
               <span className="links_name">Explore</span>
                </Link>
            </li>
            <li>
                <Link to="">
                <ImHome/>
               <span className="links_name">Playlist</span>
                </Link>
            </li>
            <li>
                <Link to="">
                <ImHome/>
               <span className="links_name">History</span>
                </Link>
            </li>
            <li>
                <Link to="">
                <ImHome/>
               <span className="links_name">Watch Later</span>
                </Link>
            </li>
        </ul>
    )
}