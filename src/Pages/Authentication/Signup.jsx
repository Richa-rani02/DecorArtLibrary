import "./auth.css";
import {Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import {userSignup} from "../../services/index";
import { useAuth } from "../../context/auth-context";
export const Signup=()=>{
    let navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        firstname:"",
        lastname:"",
        email: "",
        password: "",
    });
  
    const { authDispatch } = useAuth();

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
    const {email,password,firstname,lastname}=formValues; 
    const signupHandler = () => {
        if (
            firstname !== "" &&
            email !== "" &&
            password !== ""
          )
        {userSignup(
            formValues,
            authDispatch,navigate)
        }
    }

    return(
        <div className="auth__container">
            <section className="auth">

                <form className="auth-form top-gutter-lg flex-col" onSubmit={e => e.preventDefault()}>
                    <h4 className="bottom-gutter-sm">Signup</h4>
                    <input type="text" name="firstname" value={formValues.firstname} placeholder="FirstName" className="input-box" onChange={handleChange} required />
                    <input type="text" name="lastname" value={formValues.lastname} placeholder="LastName" className="input-box" onChange={handleChange} required />
                    <input type="email" name="email" value={formValues.email} placeholder="Email" className="input-box" onChange={handleChange} required />
                    <input type="password" name="password" value={formValues.password} placeholder="Password" className="input-box" onChange={handleChange} required />
                    <button onClick={signupHandler} className="btn btn-solid-primary btn-sm btn-rounded-2r top-gutter-md btn-md btn-color">Signup</button>
                    <span className="new-account top-gutter-sm">
                    <p>Already have an Account ?</p>
                    <Link to="/login" className="signup-link">SignIn</Link>
                    </span>
                </form>


            </section>
        </div>
    )
}