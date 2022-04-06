import axios from "axios";
import { likedActions } from "../Utils/actions";
import { likedUrl } from "../Utils/apiUrl";
import toast from "react-hot-toast";
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
            toast.success("video added to liked !");
            dispatch({ type: likedActions.ADD_TO_LIKED, payload: data.likes })
        }

    } catch (error) {
        toast.error("Some error occured :( .Try again!");
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
            toast.success("video removed from  liked !");
            dispatch({ type: likedActions.REMOVE_FROM_LIKED, payload: data.likes })
        }

    } catch (error) {
        toast.error("Some error occured :( .Try again!");
        console.log(error);
    }
}