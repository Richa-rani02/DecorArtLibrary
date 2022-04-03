import "./Modal.css";
import { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { addToPlaylist, addVideosToPlaylist,removeVideosFromPlaylist } from "../../services/index";
import {useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/state-context";
import { useAuth } from "../../context/auth-context";
import { isInList } from "../videoCard/helper";
export const Modal = ({ isPlaylistActive, setPlaylistActive, modalData }) => {

    const [isInputActive, setIsInputActive] = useState(false);
    const [playlistTitle, setPlaylistTitle] = useState("");
    const { state: { playlists, videos }, dispatch } = useStateContext();
    const { authState: { token } } = useAuth();
    const navigate=useNavigate();

    const playlistHandler = () => {
        token ? addToPlaylist(dispatch, token, playlistTitle, setIsInputActive)
            : navigate("/login");
        setPlaylistTitle("");
    }
    useEffect(() => {
        isPlaylistActive ? document.body.style.overflow = "hidden" : document.body.style.overflow = 'unset';
    }, [isPlaylistActive])

    return (
        <div className={`modal-container ${isPlaylistActive && 'modal-active'} `}>
            <div className="popup">
                <div className="playlist__header">
                    <p className="sub-p">Save to playlist</p>
                    <i className="fa fa-times" aria-hidden="true" onClick={() => setPlaylistActive(prev => !prev)}></i>
                </div>
                {
                    playlists.length > 0 &&
                    <>
                        <hr />
                        <div className="playlist__modal__content top-gutter-sm">
                            <form className="category_filterbox">
                                {playlists.map((play) => {
                                    const isInPlaylist =isInList(play.videos,modalData._id);
                                    return (
                                        <label key={play._id} className="filter-block">
                                            <input type="checkbox" value={play.title}
                                                name={play.title}
                                                onChange={(e) => {
                                                e.target.checked
                                                ? addVideosToPlaylist(dispatch, token, play._id, modalData)
                                                : removeVideosFromPlaylist(dispatch,token,play._id,modalData._id)
                                                }
                                               
                                                }
                                                checked={isInPlaylist}
                                            />{play.title}
                                        </label>
                                    )

                                })}

                            </form>
                        </div>
                    </>
                }

                <hr />
                <div className="modal-footer-btn flex-col">
                    {isInputActive && <input type="text" value={playlistTitle} className={`playlist-input-field ${"playlist-input-active"}`} onChange={(e) => setPlaylistTitle(e.target.value)} />}

                    {isInputActive ?
                        <>
                            <div className="create-btn top-gutter-xs">
                                <span className="auto-margin btn btn-solid-primary btn-sm btn-rounded-2r btn-color" onClick={() => playlistHandler()}>Create</span>
                            </div>
                        </> :
                        <div className="create-btn top-gutter-xs">
                            <MdAdd size={28} style={{ fill: 'white' }} className="right-gutter-sm" />
                            <span onClick={() => setIsInputActive(prev => !prev)}>Create new playlist</span>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}