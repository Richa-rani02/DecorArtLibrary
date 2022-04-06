import "../Playlist.css";
import { useParams, useLocation } from "react-router-dom";
import { HorizontalCard, Sidebar } from "../../../components/index";
import { useStateContext } from "../../../context/state-context";
import { Empty } from "../../index";
export const Playlistvideo = () => {
    const { playlistId } = useParams();
    const location = useLocation();
    const { state: { playlists } } = useStateContext();
    const playlistList = playlists?.find((play) => play._id === playlistId);
    return playlistList && playlistList.videos.length > 0 ? (
        <>
            <Sidebar />
            <div className="category-video playlistvideo-container">
                <div className="videoimg_list_wrap">
                    <div className="video_img_wrap">
                        {playlistList.videos.slice(0, 1).map(video => (
                            <div className="playlistimg-container bottom-gutter-sm" key={video._id}>

                                <img src={`https://img.youtube.com/vi/${video._id}/0.jpg`} alt="video" className="img-responsive" />

                            </div>
                        ))}
                        <span>{playlistList.title}</span>

                    </div>
                    <div className="videolist_wrap">
                        {
                            playlistList.videos.map(clip => (
                                < HorizontalCard key={clip._id} videos={clip} listId={playlistId} />
                            ))
                        }


                    </div>
                </div>
            </div>
        </>
    )
        : (
            <>
                <Sidebar />
                <div className="category-video playlistvideo-container">
                    <Empty path={location.pathname} />
                </div>
            </>
        )
}