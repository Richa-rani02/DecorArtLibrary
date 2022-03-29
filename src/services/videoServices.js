import axios from "axios";
import {dataActions} from "../Utils/actions";
import {videoUrl} from "../Utils/apiUrl";

export const getVideos=async(dispatch)=>{
 
    try{
        const {data,status}=await axios.get(videoUrl);
        if(status===200){
            dispatch({type:dataActions.LOAD_VIDEOS,payload:data.videos})
        }

    }catch(error){
        console.log(error);
        dispatch({type:dataActions.ERROR,payload:"Error while fetching videos data"});
    }
} 