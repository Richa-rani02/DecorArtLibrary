import axios from "axios";
import { watchActions } from "../Utils/actions";
import { watchLaterUrl } from "../Utils/apiUrl";
import toast from "react-hot-toast";

export const addToWatchLater = async (dispatch, token, video) => {
    try {
        const response = await axios.post(watchLaterUrl, {
            video
        }, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200 || response.status === 201) {
            toast.success("Video added to watch Later");
            dispatch({ type: watchActions.ADD_TO_WATCHLATER, payload: response.data.watchlater });
        }

    } catch (error) {
        toast.error("Some error occured :( .Try again!");
    }

}

export const removeFromWatchLater = async (dispatch, token, id) => {
    try {
        const response = await axios.delete(`/api/user/watchlater/${id}`, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200 || response.status === 201) {


            toast.success("Removed from  watch later !");
            dispatch({ type: watchActions.REMOVE_FROM_WATCHLATER, payload: response.data.watchlater });
        }

    } catch (error) {
        toast.error("Some error occured :( .Try again!");
    }

}