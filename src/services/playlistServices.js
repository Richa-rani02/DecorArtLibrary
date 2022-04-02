import axios from "axios";
import { playlistActions } from "../Utils/actions";
import { playlistUrl } from "../Utils/apiUrl";

export const addToPlaylist = async (dispatch, token, name,setInputActive) => {
    try {
        const { data, status } = await axios.post(playlistUrl, {
            playlist: {
                title: name,
                description:""
            },
        },
            {
                headers: {
                    authorization: token
                }
            });
            setInputActive(false);
            if(status===200 || status===201){
                dispatch({type:playlistActions.ADD_TO_PLAYLIST,payload:data.playlists})
            }
    } catch (error) {
    console.log(error);
    }
}