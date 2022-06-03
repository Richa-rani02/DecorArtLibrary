import { globalActions} from "../Utils/actions";

export const globalReducer=(state,action)=>{
    const {type,payload}=action;

    switch(type){
        case globalActions.PLAYLIST_MODAL:{
            return{
                ...state,
                modalActive:{
                    isActive:!state.modalActive.isActive,
                    data:payload
                }
            }
        }
    }
}