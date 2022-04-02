import "./Modal.css";
import { useState,useEffect } from "react";
import { MdAdd } from "react-icons/md";
export const Modal = ({ isPlaylistActive, setPlaylistActive }) => {

    const [isInputActive, setIsInputActive] = useState(false);
    console.log(isInputActive);

    useEffect(()=>{
        isPlaylistActive?document.body.style.overflow="hidden":document.body.style.overflow='unset'; 
    },[isPlaylistActive])

    return (
        <div className={`modal-container ${isPlaylistActive && 'modal-active'} `}>
            <div className="popup">
                <div className="playlist__header">
                    <p className="sub-p">Save to playlist</p>
                    <i class="fa fa-times" aria-hidden="true" onClick={() => setPlaylistActive(prev => !prev)}></i>
                </div>
                <hr />
                <div className="playlist__modal__content top-gutter-sm">
                    <form className="category_filterbox">
                        <label key="1" className="filter-block">
                            <input type="checkbox" value=""
                                name="test"
                            /> Test
                        </label>
                        <label key="1" className="filter-block">
                            <input type="checkbox" value=""
                                name="test"
                            /> Test
                        </label>
                    </form>
                </div>
                <hr />
                <div className="modal-footer-btn flex-col">
                    {isInputActive && <input type="text" className={`playlist-input-field ${"playlist-input-active"}`} />}

                    {isInputActive ?
                        <>
                            <div className="create-btn top-gutter-xs">
                                <span className="auto-margin btn btn-solid-primary btn-sm btn-rounded-2r btn-color">Create</span>
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