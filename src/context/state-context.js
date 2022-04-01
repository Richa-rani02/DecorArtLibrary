import { createContext,useContext,useEffect,useReducer,useState } from "react";
import { getCategory,getVideos } from "../services";
import { dataReducer } from "../reducers/dataReducer";

const StateContext=createContext({});

const StateProvider =({children})=>{

const initialState={
    isLoading:true,
    category:[],
    videos:[],
    error:null,
    watchLater:[],
    sortby:"",
    searchVideo:"",
    history:[],
}

const [state,dispatch]=useReducer(dataReducer,initialState);
const [drawer, setDrawer] = useState(false);
useEffect(()=>{
    getCategory(dispatch);
    getVideos(dispatch);
},[]);
return(
        <StateContext.Provider value={{state,dispatch,drawer,setDrawer}}>
            {children}
        </StateContext.Provider>
    )
}

const useStateContext=()=>useContext(StateContext);

export {StateProvider,useStateContext};