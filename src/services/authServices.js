import axios from "axios";
import {authActions} from "../Utils/actions";
import {loginUrl} from "../Utils/apiUrl";


export const userLogin=async(userDetails,authDispatch,toast,navigate)=>{

    try{
       const response=await axios.post(loginUrl,{
           email:userDetails.email,
           password:userDetails.password
       });

      if(response.status===200){
          localStorage.setItem("decorartToken",response.data.encodedToken);
          toast.success("You are now logged in !");
          authDispatch({type:authActions.AUTH,payload1:response.data.encodedToken,payload2:response.data.foundUser})
         navigate("/explore");
      }
    } catch(error){
        console.log(error);
        toast.error("Error in login");
        authDispatch({type:authActions.ERROR,payload:"Error in login"});
        
    }
}


