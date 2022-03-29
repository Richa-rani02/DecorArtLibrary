import axios from "axios";
import {dataActions} from "../Utils/actions";
import {categoryUrl} from "../Utils/apiUrl";
export const getCategory=async(dispatch)=>{
 
    try{
        const {data,status}=await axios.get(categoryUrl);
        if(status===200){
            dispatch({type:dataActions.LOAD_CATEGORY,payload:data.categories})
        }

    }catch(error){
        console.log(error);
        dispatch({type:dataActions.ERROR,payload:"Error while fetching category data"});
    }
} 



