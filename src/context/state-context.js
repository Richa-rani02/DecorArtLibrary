import { createContext,useContext } from "react";

const StateContext=createContext({});

const StateProvider =({children})=>{
    return(
        <StateContext.Provider>
            {children}
        </StateContext.Provider>
    )
}

const useStateContext=()=>useContext(StateContext);

export {StateProvider,useStateContext};