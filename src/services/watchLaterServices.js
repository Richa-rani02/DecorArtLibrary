import axios from "axios";
import { watchActions } from "../Utils/actions";
import { watchLaterUrl } from "../Utils/apiUrl";

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
            console.log(response.data.watchlater);
            dispatch({ type: watchActions.ADD_TO_WATCHLATER, payload: response.data.watchlater });
        }

    } catch (error) {
        console.log(error);
    }

}

export const removeFromWatchLater = async (dispatch, token, id) => {
    const Api=`api/user/wishlist/${id}`;
    console.log(Api);
    console.log(token,id);
    try {
        const response = await axios.delete(`/api/user/watchlater/${id}`, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200 || response.status === 201) {
            console.log(response.data.watchlater);
            dispatch({ type: watchActions.REMOVE_FROM_WATCHLATER, payload: response.data.watchlater });
        }

    } catch (error) {
        console.log(error);
    }

}