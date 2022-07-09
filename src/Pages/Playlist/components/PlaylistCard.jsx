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
                <div className="img-container rad-5x">

                    {videos.length > 0 ? videos.slice(0, 1).map(video => (
                        <img src={`https://img.youtube.com/vi/${video._id}/0.jpg`} alt=" no video" className="img-responsive" />
                    )) :
                        <img src="../Assets/novideo.png"
                            alt="no video" className="img-responsive" />
                    }

                </div>
                {videos.length>0 && 
                <div className="trans-drawer flex-container"onClick={() => navigate(`/playlist/${_id}`)}  >
                   <span className="small-text">{videos.length}<span className="video-text"> {videos.length>1?'videos':'video'}</span></span>
                </div>
}
            </>
            <div className="playlist-desc">
                <span>{title}</span>
                <MdOutlineDelete size={24} onClick={() => removePlaylist(dispatch, token, _id,navigate)} />
            </div>

        </div>
    )
}