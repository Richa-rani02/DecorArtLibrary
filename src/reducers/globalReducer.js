import { globalActions} from "../Utils/actions";

export const globalReducer=(state,action)=>{
    const {type,payload}=action;
    console.log(payload);

    switch(type){
        case globalActions.DRAWER:{
            return {
                ...state,
                drawerActive:!state.drawerActive
            }
        }
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