import "./VideoCard.css";
// Icons 

import { HiDotsVertical } from "react-icons/hi";
import { MdPlayCircleFilled, MdOutlineDelete } from "react-icons/md";
import { RiPlayListAddFill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { isInList } from "./helper";
import { useAuth } from "../../context/auth-context";
import { useStateContext } from "../../context/state-context";
import { removeFromWatchLater, addToWatchLater, addToHistory, removeFromHistory } from "../../services/index";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { removeFromLiked } from "../../services/likedServices";
import { Modal } from "../modal/Modal";
import {useGlobal} from "../../context/global-context";
import { globalActions} from "../../Utils/actions";

export const VideoCard = ({ videos }) => {
    const {
        _id: id,
        title,
        creator,
        duration,
        views,
        createdDate
    } = videos;

    const {globalDispatch}=useGlobal();
    const [isOptionActive, setOptionActive] = useState(false);
    const ref = useRef();
    const { authState: { token } } = useAuth();
    const { state: { watchLater, history, liked }, dispatch } = useStateContext();

    const isInWatchLater = isInList(watchLater, id);
    const isInHistory = isInList(history, id);
    const isInLiked = isInList(liked, id);
    const navigate = useNavigate();
    const location = useLocation();


    const watchLaterHandler = () => {
        token
        ? isInWatchLater
            ? removeFromWatchLater(dispatch, token, id)
            : addToWatchLater(dispatch, token, videos)
        : navigate("/login")
    }
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isOptionActive && ref.current && !ref.current.contains(e.target)) {
                setOptionActive(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isOptionActive]);


    const videoClickHandler = () => {
        navigate(`/video/${id}`);
        token && !isInHistory && addToHistory(dispatch, token, videos);
    }
    
    const addToPlaylist = () => {
        if (token) {
            globalDispatch({type:globalActions.PLAYLIST_MODAL,payload:videos})
        } else {
            navigate("/login")
        }

    }

    return (
        <>
            <div className="video-card top-gutter-md">
                <div className="img-container" onClick={() => videoClickHandler()}>
                    <img src={`https://img.youtube.com/vi/${id}/0.jpg`} alt="video" className="clip img-responsive" />
                    <MdPlayCircleFilled className="play-button" />
                    <span className="video-duration">{duration}</span>
                </div>
                <div className="video-desc flex-col top-gutter-sm">
                    <h3 className="video-title bottom-gutter-xs">{title}</h3>
                    <span className="created-by">{creator}</span>
                    <div className="video-detail">
                        <span>{views} Views | {createdDate}</span>
                        <span ref={ref}>
                        
                            <HiDotsVertical size={24} className="watch_playlistoption" onClick={() =>setOptionActive(prev => !prev) } />
                            {isOptionActive && (
                                <div className={`option-container flex-col ${isOptionActive && 'active'}`}>
                                    <span onClick={() => watchLaterHandler()}>
                                        {isInWatchLater
                                            ? <><MdOutlineDelete className="right-gutter-sm" />Remove from  watch Later</>
                                            : <><AiOutlineClockCircle className="right-gutter-sm" />Add to watch Later</>
                                        }
                                    </span>
                                    <span onClick={() => addToPlaylist()}><RiPlayListAddFill className="right-gutter-sm" />Add to playlist</span>
                                    {
                                        isInHistory && location.pathname === "/history" && <span onClick={() => token && removeFromHistory(dispatch, token, id)} ><MdOutlineDelete className="right-gutter-sm" />Remove from history</span>

                                    }
                                    {
                                        isInLiked && location.pathname === "/liked" && <span onClick={() =>  token && removeFromLiked(dispatch, token, id)} ><MdOutlineDelete className="right-gutter-sm" />Remove from liked</span>

                                    }

                                </div>
                            )}

                        </span>
                    </div>
                </div>
            </div>
            <Modal/>
        </>
    )
}