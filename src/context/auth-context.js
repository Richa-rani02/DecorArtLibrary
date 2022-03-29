import { createContext, useContext,useReducer } from "react";
import {authReducer} from "../reducers/authReducer";

const AuthContext =createContext({});

const AuthProvider = ({ children }) => {

    const getToken = localStorage.getItem("decorartToken");

    const authInitialState = {
        error: null,
        token: getToken ?? '',
        userDetails: null,
    };

    const [authState, authDispatch] = useReducer(authReducer, authInitialState);


    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )


}
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };