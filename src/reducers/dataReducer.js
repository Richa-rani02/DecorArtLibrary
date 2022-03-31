import { dataActions } from "../Utils/actions";
export const dataReducer = (state, action) => {

    const { type, payload } = action;
    console.log(payload)
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
                error: null,
                category: [
                    ...payload.map((cat) => ({
                        ...cat,
                        isCatActive: false
                    }))
                ]
            }
        case dataActions.LOAD_VIDEOS:
            return {
                ...state,
                isLoading: false,
                error: null,
                videos: payload
            }
        case dataActions.ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case dataActions.SORT_BY:
            return {
                ...state,
                sortby: payload,
                category: state.category.map((cat) =>
                    cat.categoryName === payload ? {
                        ...cat,
                        isCatActive: true
                    } : {
                        ...cat,
                        isCatActive: false
                    }

                )

            }
         case dataActions.SEARCH:
             return{
                 ...state,
                 searchVideo:payload
             }   

    }
}