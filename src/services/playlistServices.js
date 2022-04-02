import axios from "axios";
import { playlistActions } from "../Utils/actions";
import { playlistUrl } from "../Utils/apiUrl";

export const addToPlaylist = async (dispatch, token, name, setInputActive) => {
    try {
        const { data, status } = await axios.post(playlistUrl, {
            playlist: {
                title: name,
                description: ""
            },
        },
            {
                headers: {
                    authorization: token
                }
            });
        setInputActive(false);
        if (status === 200 || status === 201) {
            console.log(data.playlists);
            dispatch({ type: playlistActions.ADD_TO_PLAYLIST, payload: data.playlists })
        }
    } catch (error) {
        console.log(error);
    }
}
export const addVideosToPlaylist = async (dispatch, token, id, video) => {
    try {
        const { data, status } = await axios.post(`/api/user/playlists/${id}`, {
            video
        }, {
            headers: {
                authorization: token
            }
        });
        if (status === 200 || status === 201) {
            console.log(data.playlists);
            dispatch({ type: playlistActions.ADD_VIDEOS_TO_PLAYLIST, payload: data.playlists })
        }

    } catch (error){
console.log(error);
    }
}