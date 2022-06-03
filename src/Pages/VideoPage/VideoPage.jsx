import "./VideoPage.css";
import { useParams } from "react-router-dom";
import { SingleVideo } from "./SingleVideo";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useStateContext } from "../../context/state-context";
import { MdOutlineClose } from "react-icons/md";
import {useState} from "react";
import { AddNotesServices,deleteNotesService} from "../../services";
import { useAuth } from "../../context/auth-context";

export const VideoPage = () => {
    const { state: { videos,notes },dispatch} = useStateContext();
    const {authState:{token}}=useAuth();
    const { videoId } = useParams();
    const video = videos?.find((video) => video._id === videoId);
    const [noteContent,setNoteContent]=useState("");
    const filterdVideo=notes.filter(note=>note.videoId===video._id)
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
                            value={noteContent|| ""}
                            name="comment"
                            onChange={e=>setNoteContent(e.target.value)}
                            placeholder="write your comments...">

                        </textarea>
                        <button className="top-gutter-sm" onClick={()=>{
                            AddNotesServices(video._id,noteContent,token,dispatch)
                            setNoteContent("");
                        }}>
                            Add Notes
                        </button>
                    </span>
                    <span>
                        <hr />
                        {filterdVideo.map((note)=>(
                            <span  key={note._id} className="single_note">
                            <p>{note.content}</p>
                            <MdOutlineClose className="note-icon" onClick={()=>deleteNotesService(note._id,token,dispatch)} />
                        </span>
                        ))}
                    </span>
                </div>
            </div>
        </>
    ) : (
        <>
        </>
    )
}