import axios from "axios";
import {authActions} from "../Utils/actions";
import {loginUrl} from "../Utils/apiUrl";
import toast from "react-hot-toast";

export const userLogin=async(userDetails,authDispatch,navigate)=>{
    const toastId = toast.loading("Logging in...");

    try{
       const {data:{foundUser,encodedToken},status}=await axios.post(loginUrl,{
           email:userDetails.email,
           password:userDetails.password
       });

      if(status===200){
          localStorage.setItem("decorartToken",encodedToken);
          toast.success(`Hello, ${foundUser.firstName}. Welcome back!`, {
            id: toastId,
            icon: "👋",
          });
          authDispatch({type:authActions.AUTH,payload: { user:foundUser, token:encodedToken }})
            navigate(-1);
      }
    } catch(error){
        console.log(error);
        toast.error("Some error occured in login. Try Again:( ", {
            id: toastId,
          });
        authDispatch({type:authActions.ERROR,payload:error.response});
        
    }
}


