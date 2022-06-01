import {ImHome} from "react-icons/im";
import {RiPlayListAddFill,RiHistoryLine} from "react-icons/ri";
import {MdExplore} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";
import { BiLike} from "react-icons/bi";
export const navItems=[
    {
        icon:ImHome,
        title:'Home',
        path:'/'
    },
    {
        icon:MdExplore,
        title:'Explore',
        path:'/explore'
    },
    {
        icon:RiHistoryLine,
        title:'History',
        path:'/history',
    },
    {
        icon:RiPlayListAddFill,
        title:'Playlist',
        path:'/playlist'
    },
    {
        icon:BiLike,
        title:'Liked Videos',
        path:'/liked'
    },
    {
        icon:AiOutlineClockCircle,
        title:'Watch Later',
        path:'/watchlater'
    }

]