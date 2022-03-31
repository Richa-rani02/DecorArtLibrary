import axios from "axios";
import { watchActions } from "../Utils/actions";
import { watchLaterUrl } from "../Utils/apiUrl";

export const addToWatchLater = async (dispatch, token, video,toast) => {
    try {
        const response = await axios.post(watchLaterUrl, {
            video
        }, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200 || response.status === 201) {
             //will replace it with snackbar 
            toast.success("Added to watch later !");
            dispatch({ type: watchActions.ADD_TO_WATCHLATER, payload: response.data.watchlater });
        }

    } catch (error) {
        console.log(error);
    }

}

export const removeFromWatchLater = async (dispatch, token, id,toast) => {
    try {
        const response = await axios.delete(`/api/user/watchlater/${id}`, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200 || response.status === 201) {

            //will replace it with snackbar 

            toast.success("Removed from  watch later !");
            dispatch({ type: watchActions.REMOVE_FROM_WATCHLATER, payload: response.data.watchlater });
        }

    } catch (error) {
        console.log(error);
    }

}