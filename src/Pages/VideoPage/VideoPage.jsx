import "./VideoPage.css";
import { useParams } from "react-router-dom";
import { SingleVideo } from "./SingleVideo";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useStateContext } from "../../context/state-context";
import { MdOutlineClose } from "react-icons/md";

export const VideoPage = () => {
    const { state: { videos } } = useStateContext();
    const { videoId } = useParams();
    const video = videos?.find((video) => video._id === videoId);
    return video ? (
        <>
            <Sidebar />
            <div className="video-page">
                <SingleVideo video={video} />
                <div className="notes_container">
                    <span className="heading-container">
                        <p className="main-p center-text">Take Notes..✍️</p>
                        <hr />
                    </span>
                    <span>
                        <textarea type="text"
                            value=""
                            name="comment"
                            placeholder="write your comments...">

                        </textarea>
                        <button className="top-gutter-sm">
                            Add Notes
                        </button>
                    </span>
                    <span>
                        <hr />
                        <span className="single_note ">
                            <p>text</p>
                            <MdOutlineClose className="note-icon " />
                        </span>
                        <span className="single_note">
                            <p>dtextddddddddddddddddddddddddddd</p>
                            <MdOutlineClose className="note-icon" />
                        </span>
                        <span className="single_note">
                            <p>text</p>
                            <MdOutlineClose className="note-icon" />
                        </span>
                        <span className="single_note">
                            <p>text</p>
                            <MdOutlineClose className="note-icon" />
                        </span>

                    </span>
                </div>
            </div>
        </>
    ) : (
        <>
        </>
    )
}