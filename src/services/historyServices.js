import axios from "axios";
import { historyActions } from "../Utils/actions";
import { historyUrl} from "../Utils/apiUrl";
export const addToHistory=async (dispatch,token,video)=>{
    try{
        const {data,status}=await axios.post(historyUrl,{
            video
        },{
            headers:{
                authorization: token
            }
        });
        if(status===200 || status===201){
            dispatch({type:historyActions.ADD_TO_HISTORY,payload:data.history})
        }
      
    }catch(error){
        console.log(error);
    }
}

export const removeFromHistory=async(dispatch,token,id)=>{
    try{
        const {data,status}=await axios.delete(`/api/user/history/${id}`,{
            headers:{
                authorization:token
            }
        });
        if(status===200 || status===201){
            dispatch({type:historyActions.REMOVE_FROM_HISTORY,payload:data.history})
        }

    }catch(error){
        console.log(error);
    }
}