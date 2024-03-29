import {createContext,useContext,useReducer} from "react";
import { globalReducer } from "../reducers/globalReducer";
export const GlobalContext=createContext({});

const GlobalProvider=({children})=>{

 const initialState={
     modalActive:{
         isActive:false,
         data:{}
     },
 }   
 const [globalState,globalDispatch]=useReducer(globalReducer,initialState);
return(
    <GlobalContext.Provider value={{globalState,globalDispatch}}>
        {children}
    </GlobalContext.Provider>
)
}

const useGlobal=()=>useContext(GlobalContext);

export {GlobalProvider,useGlobal};