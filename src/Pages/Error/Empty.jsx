import "./Error.css";
import { useNavigate } from "react-router-dom";
export const Empty = ({path}) => {
    let message = "";
    let navigate = useNavigate();
    console.log(path);
    switch (path) {
        case "/watchlater":
            {
                message = "You have not added any video in watch Later !!"
            }
            break;
        case "/history":
            {
                message = "You have not watched any video !!"
            }
            break;
        case "/liked":
            {
                message = "You have not liked any video !!"
            }
            break;
        case "/playlist":
            {
                message = "No playlist created !!"
            }
            break;
        case "/playlist/:playlistId":
            {
                message = "No video added in playlist !!"
            }
            break;
            case "/explore":
            {
                message = "No video available !!"
            }
    }
    return (
        <div className="empty-page">
            <div className="empty-img">
                <img src="../Assets/novideoavaiable.png" className="image-resp"/>
            </div>
            <div className="empty-text">
                <span >{message}</span>

            </div>
            {
                    path !== "/explore" &&  <button className="btn btn-solid-primary btn-sm btn-rounded-2r btn-color top-gutter-md" onClick={() => navigate("/explore")}>Explore Now</button>
                }
        </div>
    )
}