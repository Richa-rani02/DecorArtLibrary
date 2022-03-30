import "./VideoCard.css";
import { HiDotsVertical } from "react-icons/hi";
import { MdPlayCircleFilled } from "react-icons/md";
import { RiPlayListAddFill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
export const VideoCard = ({ videos }) => {
    const [isModalActive, setModalActive] = useState(false);
    const ref = useRef();

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
                <img src={videos.thumbnail} alt="video" className="clip" />
                <MdPlayCircleFilled className="play-button" />
                <span className="video-duration">{videos.duration}</span>
            </div>
            <div className="video-desc flex-col top-gutter-sm">
                <h3 className="video-title bottom-gutter-xs">{videos.title}</h3>
                <span className="created-by">{videos.creator}</span>
                <div className="video-detail">
                    <span>{videos.views} Views | 3months ago</span>
                    <span ref={ref}>
                        <HiDotsVertical size={24} className="watch_playlistoption" onClick={() => setModalActive(prev => !prev)} />
                        {isModalActive && (
                            <div className={`option-container flex-col ${isModalActive && 'active'}`}>
                                <span><AiOutlineClockCircle className="right-gutter-sm" />Add to watch Later</span>
                                <span><RiPlayListAddFill className="right-gutter-sm" />Add to playlist</span>
                            </div>
                        )}

                    </span>
                </div>
            </div>
        </div>
    )
}