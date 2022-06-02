import "./Header.css";
import { FaUserCircle } from "react-icons/fa";
import {AiOutlineLogout} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { authActions } from "../../Utils/actions";
import toast from "react-hot-toast";
export const Header = () => {
  const { authState: { token }, authDispatch } = useAuth();
let navigate=useNavigate();

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
        <div>
          <h1>Decor Art</h1>
        </div>
      </div>
      <div className="right_area">

        {token ? <AiOutlineLogout size={30} className="profile-icon" onClick={() => logOutHandler()} /> : <FaUserCircle size={30} onClick={()=>navigate("/login")}/>}
      </div>
    </header>
  )
}
