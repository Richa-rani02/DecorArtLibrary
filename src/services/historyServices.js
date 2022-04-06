import axios from "axios";
import { historyActions } from "../Utils/actions";
import { historyUrl} from "../Utils/apiUrl";
import toast from "react-hot-toast";
export const addToHistory=async (dispatch,token,video)=>{
    const toastId=toast.loading("Adding video to history...");
    try{
        const {data,status}=await axios.post(historyUrl,{
            video
        },{
            headers:{
                authorization: token
            }
        });
        if(status===200 || status===201){
            toast.success("video added to history!", {
                id: toastId,
              });
            dispatch({type:historyActions.ADD_TO_HISTORY,payload:data.history})
        }
      
    }catch(error){
        toast.error("Some error occured :( .Try again!",{
            id:toastId,
        });
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
            toast.success("video removed from  history !");
            dispatch({type:historyActions.REMOVE_FROM_HISTORY,payload:data.history})
        }

    }catch(error){
        toast.error("Some error occured :( .Try again!");
        console.log(error);
    }
}

export const clearAllHistory=async(dispatch,token)=>{
    const toastId=toast.loading("Clearing all history...");
    try{
        const {data,status}=await axios.delete(`/api/user/history/all`,{
            headers:{
                authorization:token
            }
        });
        if(status===200 || status===201){
            toast.success("All history cleared !", {
                id: toastId,
              });
            dispatch({type:historyActions.CLEAR_ALL_HISTORY});
        }

    }catch(error){
        toast.error("Some error occured :( .Try again!",{
            id:toastId,
        });
        console.log(error);
    }
}