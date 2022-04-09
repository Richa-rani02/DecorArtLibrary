import { globalActions} from "../Utils/actions";

export const globalReducer=(state,action)=>{
    const {type,payload}=action;

    switch(type){
        case globalActions.DRAWER:{
            return {
                ...state,
                drawerActive:!state.drawerActive
            }
        }
        case globalActions.OPTION_PANEL:{
            return{
                ...state,
                optionActive:!state.optionActive
            }
        }
        case globalActions.PLAYLIST_MODAL:{
            return{
                ...state,
               modalActive:!state.modalActive
            }
        }
    }
}