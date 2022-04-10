import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useStateContext } from "../../context/state-context";
import { FaUserCircle } from "react-icons/fa";
import {AiOutlineLogout} from "react-icons/ai";
import {useNavigate,useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { authActions } from "../../Utils/actions";
import { dataActions } from "../../Utils/actions";
import toast from "react-hot-toast";
import { useGlobal } from "../../context/global-context";
import { globalActions } from "../../Utils/actions";
export const Header = () => {
  const { authState: { token }, authDispatch } = useAuth();
let navigate=useNavigate();
let location=useLocation();

const {state,dispatch}=useStateContext();
const {globalDispatch}=useGlobal();

const logOutHandler=()=>{
  const toastId = toast.loading("Logging out...");
        toast.success("You're logged out successfully", {
            id: toastId,
        });
        authDispatch({ type: authActions.LOGOUT });
        navigate("/explore");
}
  return (
    <header>
      <div className="left_area">
        {location.pathname!=="/" && 
        <label htmlFor="check">
          <GiHamburgerMenu className="hamburger-icon" onClick={()=>globalDispatch({type:globalActions.DRAWER})} />
        </label>
        }
        <div>
          <h1>Decor Art</h1>
        </div>
      </div>
      <form action="" className="search-form">
        <input type="search" id="search-bar" value={state.searchVideo} onChange={(e)=>dispatch({type:dataActions.SEARCH,payload:e.target.value})}/>
        <label htmlFor="search-bar" className="fas fa-search"></label>
      </form>
      <div className="right_area">

        {token ? <AiOutlineLogout size={30} className="profile-icon" onClick={() => logOutHandler()} /> : <FaUserCircle size={30} onClick={()=>navigate("/login")}/>}
      </div>
    </header>
  )
}
