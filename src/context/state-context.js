import { createContext,useContext,useEffect,useReducer } from "react";
import { getCategory,getVideos } from "../services";
import { dataReducer } from "../reducers/dataReducer";

const StateContext=createContext({});

const StateProvider =({children})=>{

const initialState={
    isLoading:true,
    category:[],
    videos:[],
    error:null
}

const [state,dispatch]=useReducer(dataReducer,initialState);

useEffect(()=>{
    getCategory(dispatch);
    getVideos(dispatch);
},[]);

return(
        <StateContext.Provider value={{state,dispatch}}>
            {children}
        </StateContext.Provider>
    )
}

const useStateContext=()=>useContext(StateContext);

export {StateProvider,useStateContext};