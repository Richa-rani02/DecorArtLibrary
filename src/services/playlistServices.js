import axios from "axios";
import { playlistActions } from "../Utils/actions";
import { playlistUrl } from "../Utils/apiUrl";
import toast from "react-hot-toast";

export const addToPlaylist = async (dispatch, token, name, setInputActive) => {
    try {
        const { data, status } = await axios.post(playlistUrl, {
            playlist: {
                title: name,
                description: "",
            },
        },
            {
                headers: {
                    authorization: token
                }
            });
        setInputActive(false);
        if (status === 200 || status === 201) {
            toast.success("Playlist created !!");
            dispatch({ type: playlistActions.PLAYLIST, payload: data.playlists })
        }
    } catch (error) {
        toast.error("Some error occured :( .Try again!");
        console.log(error);
    }
}
export const removePlaylist = async (dispatch, token,id,navigate) => {
    try {
        const { data, status } = await axios.delete(`/api/user/playlists/${id}`,{
            headers: {
                authorization: token
            }
        });
        if (status === 200 || status === 201) {
            toast.success("Playlist Deleted !!");
            dispatch({ type: playlistActions.PLAYLIST, payload: data.playlists })
            if(data.playlists.length===0){
                navigate("/explore");
            }
            
        }
    } catch (error) {
        toast.error("Some error occured :( .Try again!");
        console.log(error);
    }
}


export const addVideosToPlaylist = async (dispatch, token, id, video) => {
    const toastId=toast.loading("Adding video to playlist...");
    try {
        const { data, status } = await axios.post(`/api/user/playlists/${id}`, {
            video
        }, {
            headers: {
                authorization: token
            }
        });
        if (status === 200 || status === 201) {
            toast.success(`video added to ${data.playlist.title} playlist!`, {
                id: toastId,
              });
            dispatch({ type: playlistActions.VIDEOS_TO_PLAYLIST, payload: data.playlist })
        }

    } catch (error) {
        toast.error("Some error occured :( .Try again!",{
            id:toastId,
        });
        console.log(error);
    }
}
export const removeVideosFromPlaylist = async (dispatch, token, id, videoId) => {
    const toastId=toast.loading("Deleting video from playlist...");
    try {
        const { data, status } = await axios.delete(`/api/user/playlists/${id}/${videoId}`,{
            headers: {
                authorization: token
            }
        });
        if (status === 200 || status === 201) {
            toast.success("video deleted from  playlist!", {
                id: toastId,
              });
            dispatch({ type: playlistActions.VIDEOS_TO_PLAYLIST, payload: data.playlist })
        }

    } catch (error) {
        toast.error("Some error occured :( .Try again!",{
            id:toastId,
        });
        console.log(error);
    }
}