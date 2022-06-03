import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import {testLogin } from "./helper";
import { userLogin } from "../../services/index";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
export const Login = () => {
    let navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const { authDispatch } = useAuth();



    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
    const loginWithTest = (e) => {

        e.preventDefault();
        setFormValues(testLogin);
        userLogin(
            testLogin,
            authDispatch, navigate
        );
    }
const {email,password}=formValues;
    const loginHandler = () => {
        if (
            email !== "" &&
            password !== ""
          )
        {userLogin(
            formValues,
            authDispatch, navigate)
        }
    }


    return (
        <div className="auth__container">
            <section className="auth">

                <form className="auth-form top-gutter-lg flex-col" onSubmit={e => e.preventDefault()}>
                    <h4 className="bottom-gutter-sm">Welcome Back 👋</h4>
                    <input type="email" name="email" value={formValues.email} placeholder="Enter Email" className="input-box" onChange={handleChange} required />
                    <input type="password" name="password" value={formValues.password} placeholder="Enter Password" className="input-box" onChange={handleChange} required />
                    <span className="new-account top-gutter-sm">
                    <p>New to DecorArt ?</p>
                    <Link to="/signup" className="signup-link">Create New Account</Link>
                    </span>
                    
                    <button onClick={loginHandler} className="btn btn-solid-primary btn-sm btn-rounded-2r top-gutter-md btn-md btn-color">Login</button>
                    <button onClick={loginWithTest} className="btn btn-outline-primary btn-sm btn-rounded-2r top-gutter-sm btn-md">Test Login</button>
                </form>


            </section>
        </div>


    )
}