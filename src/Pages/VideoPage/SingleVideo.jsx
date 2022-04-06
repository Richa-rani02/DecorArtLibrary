import { BiLike, BiDislike } from "react-icons/bi";
import { AiFillLike, AiFillDislike, AiOutlineClockCircle } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";
import { useStateContext } from "../../context/state-context";
import { useAuth } from "../../context/auth-context";
import { addToLiked, removeFromLiked } from "../../services/likedServices";
import { isInList } from "../../components/videoCard/helper";
import { useNavigate } from "react-router-dom";


export const SingleVideo = ({ video }) => {
    const navigate = useNavigate();
    const { state: { liked }, dispatch } = useStateContext();
    const { authState: { token } } = useAuth();
    const isInLiked = isInList(liked, video._id);

    const likeHandler = () => {
        token
            ? isInLiked
                ? removeFromLiked(dispatch, token, video._id)
                : addToLiked(dispatch, token, video)
            : navigate("/login");

    }
    return (
        <div className="single_video_container">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video._id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
            ></iframe>
            <div className="video-footer top-gutter-sm">
                <h3 className="footer-title bottom-gutter-xs">{video.title}</h3>
                <div className="footer-btn top-gutter-xs">
                    <div className="btn-right">
                        <div className="flex-container">
                            {
                                !isInLiked ?
                                    <>
                                        <BiLike size={24} className="right-gutter-sm video-icon" onClick={() => likeHandler()} />
                                        <span>Like</span>
                                    </>
                                    :
                                    <>
                                        <AiFillLike size={24} className="right-gutter-sm video-icon highlight-text" onClick={() => likeHandler()} />
                                        <span className="highlight-text">Liked</span>
                                    </>
                            }
                        </div>
                    </div>
                </div>
                <hr />

                <p className="footer-desc bottom-gutter-md">
                    {video.description}
                </p>
            </div>
        </div>
    )
}