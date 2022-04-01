import "./VideoCard.css";
import { HiDotsVertical } from "react-icons/hi";
import { MdPlayCircleFilled, MdOutlineDelete } from "react-icons/md";
import { RiPlayListAddFill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { isInList } from "./helper";
import { useAuth } from "../../context/auth-context";
import { useStateContext } from "../../context/state-context";
import { removeFromWatchLater, addToWatchLater } from "../../services/index";
import { useNavigate, useLocation,Link } from "react-router-dom";
import { toast } from "react-toastify";

export const VideoCard = ({ videos }) => {
    const {
        _id: id,
        title,
        creator,
        duration,
        views,
    } = videos;

    const [isModalActive, setModalActive] = useState(false);
    const [playActive, setPlayActive] = useState(false);
    const ref = useRef();
    const { authState: { token } } = useAuth();
    const { state: { watchLater }, dispatch } = useStateContext();

    console.log(playActive);
    const isInWatchLater = isInList(watchLater, id);
    const navigate = useNavigate();
    const location = useLocation();


    const watchLaterHandler = () => {
        setModalActive(prev => !prev)
        token
            ? isInWatchLater
                ? location.pathname === '/explore'
                    ? toast.info("Already in watch later")
                    : removeFromWatchLater(dispatch, token, id, toast)
                : addToWatchLater(dispatch, token, videos, toast)
            : navigate("/login")
    }
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isModalActive && ref.current && !ref.current.contains(e.target)) {
                setModalActive(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isModalActive]);

    const videoClickHandler=()=>{
        navigate(`/video/${id}`)
    }

    //code commented for further implementation

    // onMouseEnter={()=>setPlayActive(prev=>!prev)} onMouseLeave={()=>setPlayActive(prev=>!prev)}     

    return (
        <div className="video-card top-gutter-md">
            <div className="img-container" onClick={()=>videoClickHandler()}>
                <img src={`https://img.youtube.com/vi/${id}/0.jpg`} alt="video" className="clip"/>
                {/* {playActive && <MdPlayCircleFilled className="play-button" />} */}
                <MdPlayCircleFilled className="play-button" />
                <span className="video-duration">{duration}</span>
            </div>
            <div className="video-desc flex-col top-gutter-sm">
                <h3 className="video-title bottom-gutter-xs">{title}</h3>
                <span className="created-by">{creator}</span>
                <div className="video-detail">
                    <span>{views} Views | 3months ago</span>
                    <span ref={ref}>
                        <HiDotsVertical size={24} className="watch_playlistoption" onClick={() => setModalActive(prev => !prev)} />
                        {isModalActive && (
                            <div className={`option-container flex-col ${isModalActive && 'active'}`}>
                                <span onClick={() => watchLaterHandler()}>
                                    {isInWatchLater
                                        ? location.pathname === "/explore"
                                            ? <><AiOutlineClockCircle className="right-gutter-sm" />Add to watch Later</>
                                            : <><MdOutlineDelete className="right-gutter-sm" />Remove from  watch Later</>
                                        : <><AiOutlineClockCircle className="right-gutter-sm" />Add to watch Later</>}
                                </span>
                                <span><RiPlayListAddFill className="right-gutter-sm" />Add to playlist</span>
                            </div>
                        )}

                    </span>
                </div>
            </div>
        </div>
    )
}