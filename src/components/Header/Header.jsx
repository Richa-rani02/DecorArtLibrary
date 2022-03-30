import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useStateContext } from "../../context/state-context";
import { FaUserCircle } from "react-icons/fa";
import {AiOutlineLogout} from "react-icons/ai";
import {useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { authActions } from "../../Utils/actions";
export const Header = () => {
  const { authState: { token }, authDispatch } = useAuth();
let navigate=useNavigate();

const {setDrawer}=useStateContext();

  return (
    <header>
      <div className="left_area">
        <label htmlFor="check">
          <GiHamburgerMenu className="hamburger-icon" onClick={()=>setDrawer(prev=>!prev)} />
        </label>
        <div>
          <h1>Decor Art</h1>
        </div>
      </div>
      <form action="" className="search-form">
        <input type="search" id="search-bar" />
        <label htmlFor="search-bar" className="fas fa-search"></label>
      </form>
      <div className="right_area">

        {token ? <AiOutlineLogout size={30} className="profile-icon" onClick={() => authDispatch({ type: authActions.LOGOUT })} /> : <FaUserCircle size={30} onClick={()=>navigate("/login")}/>}
      </div>
    </header>
  )
}
