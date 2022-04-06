import "./login_Signup.css";
import {Link,useNavigate} from "react-router-dom";
import { initialFormValues,testLogin } from "./helper";
import {userLogin} from "../../services/index";
import {useState} from "react";
import {useAuth} from "../../context/auth-context";
export const Login=()=>{
    let navigate=useNavigate();
    const [formValues, setFormValues] = useState({ ...initialFormValues });
 
    const {authDispatch}=useAuth();



    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
    const loginWithTest = (e) => {
       
        e.preventDefault();
        setFormValues(testLogin);
        userLogin(
            testLogin,
            authDispatch,navigate
        );
    }

    const loginHandler = (e) => {
        e.preventDefault();
        
        userLogin(
                formValues,
                authDispatch,toast,navigate)
        }


    return(
        <div className="login__container">
         <section className="login">
         <form action="" className="login-form top-gutter-lg flex-col">
                    <h4 className="bottom-gutter-sm">Welcome Back 👋</h4>
                    <input type="email" name="email" value={formValues.email} placeholder="Enter Email" className="input-box" onChange={handleChange} />
                    <input type="password" name="password" value={formValues.password} placeholder="Enter Password" className="input-box" onChange={handleChange}  />
                    <button type="submit" onClick={loginHandler} className="btn btn-solid-primary btn-sm btn-rounded-2r top-gutter-md btn-md btn-color">Login</button>
                    <button type="submit" onClick={loginWithTest} className="btn btn-outline-primary btn-sm btn-rounded-2r top-gutter-sm btn-md">Test Login</button>
                </form>
             </section>
        </div>

        
    )
}