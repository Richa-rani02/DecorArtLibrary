import { dataActions } from "../Utils/actions";
import { watchActions } from "../Utils/actions";
export const dataReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case dataActions.LOADING:
            return {
                ...state,
                isLoading: true,
                error: null

            }
        case dataActions.LOAD_CATEGORY:
            return {
                ...state,
                isLoading: false,
                error:null,
                category: payload
            }
        case dataActions.LOAD_VIDEOS:
            return {
                ...state,
                isLoading: false,
                error:null,
                videos: payload
            }
        case dataActions.ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case watchActions.ADD_TO_WATCHLATER:
        return{
            ...state,
            watchLater:payload

        }  
        case watchActions.REMOVE_FROM_WATCHLATER:
            return{
                ...state,
                watchLater:payload
            }  

    }
}