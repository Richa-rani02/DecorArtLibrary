import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { removePlaylist } from "../../../services/index";
import { useStateContext } from "../../../context/state-context";
import { useAuth } from "../../../context/auth-context";
export const PlaylistCard = ({ playlistfolder }) => {
    let navigate = useNavigate();
    const { _id, title, videos } = playlistfolder;
    const { dispatch } = useStateContext();
    const { authState: { token } } = useAuth();

    return (
        <div className="playlistcard">
            <>
                <div className="img-container rad-5x" onClick={() => navigate(`/playlist/${_id}`)} >

                    {videos.length > 0 ? videos.slice(0, 1).map(video => (
                        <img src={`https://img.youtube.com/vi/${video._id}/0.jpg`} alt=" no video" className="clip" />
                    )) :
                        <img src="../Assets/novideopng.png"
                            alt="no video" className="clip" />
                    }

                </div>
                <div className="trans-drawer flex-container">
                    <span className="small-text">{videos.length >= 1 && `${videos.length}+ `}<span className="video-text">video</span></span>
                </div>
            </>
            <div className="playlist-desc">
                <span>{title}</span>
                <MdOutlineDelete size={24} onClick={() => removePlaylist(dispatch, token, _id,navigate)} />
            </div>

        </div>
    )
}