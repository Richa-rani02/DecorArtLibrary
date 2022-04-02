import axios from "axios";
import { likedActions } from "../Utils/actions";
import { likedUrl } from "../Utils/apiUrl";
export const addToLiked = async (dispatch, token, video) => {
    try {
        const { data, status } = await axios.post(likedUrl, {
            video
        }, {
            headers: {
                authorization: token
            }
        });
        if (status === 200 || status === 201) {
            dispatch({ type: likedActions.ADD_TO_LIKED, payload: data.likes })
        }

    } catch (error) {
        console.log(error);
    }
}

export const removeFromLiked = async (dispatch, token, id) => {
    try {
        const { data, status } = await axios.delete(`/api/user/likes/${id}`, {
            headers: {
                authorization: token
            }
        });
        if (status === 200 || status === 201) {
            dispatch({ type: likedActions.REMOVE_FROM_LIKED, payload: data.likes })
        }

    } catch (error) {
        console.log(error);
    }
}