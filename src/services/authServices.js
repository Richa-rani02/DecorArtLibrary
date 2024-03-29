import axios from "axios";
import {authActions} from "../Utils/actions";
import {loginUrl,signupUrl} from "../Utils/apiUrl";
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


export const userSignup=async(userDetails, authDispatch, navigate)=>{
  authDispatch({ type: authActions.LOADING })
  const toastId = toast.loading("Creating new Account...");

  try {
      const {status } = await axios.post(signupUrl, {
          firstName:userDetails.firstName,
          lastName:userDetails.lastName,
          email: userDetails.email,
          password: userDetails.password
      });

      if (status === 200 || status===201) {

          toast.success("Account created successfully", {
              id: toastId,
          });
          navigate("/login");
      }
  } catch (error) {
      console.log(error);
      toast.error("Some error occured in login. Try Again:( ", {
          id: toastId,
      });
      authDispatch({ type: authActions.ERROR, payload: error.response });
  }
}


