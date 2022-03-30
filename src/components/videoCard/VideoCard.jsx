import "./VideoCard.css";
import { HiDotsVertical } from "react-icons/hi";
import { MdPlayCircleFilled } from "react-icons/md";
import { RiPlayListAddFill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { isInList } from "./helper";
import { useAuth } from "../../context/auth-context";
import { useStateContext } from "../../context/state-context";
import { removeFromWatchLater, addToWatchLater } from "../../services/index";
import { useNavigate } from "react-router-dom";

export const VideoCard = ({ videos }) => {
    const {
        _id: id,
        title,
        categoryName,
        creator,
        duration,
        views,
        thumbnail,
    } = videos;

    const [isModalActive, setModalActive] = useState(false);
    const ref = useRef();
    const { authState: { token } } = useAuth();
    const { state: { watchLater }, dispatch } = useStateContext();

      const isInWatchLater=isInList(watchLater,id);
    const navigate = useNavigate();

    const watchLaterHandler = () => {
        token
            ?isInWatchLater
                ? removeFromWatchLater(dispatch, token, id)
                : addToWatchLater(dispatch, token, videos)
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

    return (
        <div className="video-card top-gutter-md">
            <div className="img-container">
                <img src={thumbnail} alt="video" className="clip" />
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
                                <span onClick={() => watchLaterHandler()}><AiOutlineClockCircle className="right-gutter-sm" />Add to watch Later</span>
                                <span><RiPlayListAddFill className="right-gutter-sm" />Add to playlist</span>
                            </div>
                        )}

                    </span>
                </div>
            </div>
        </div>
    )
}