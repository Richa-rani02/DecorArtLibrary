import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { authActions } from "../../Utils/actions";
export const Header = () => {
  const { authState: { token }, authDispatch } = useAuth();

  return (
    <header>
      <div className="left_area">
        <label htmlFor="check">
          <GiHamburgerMenu className="hamburger-icon" />
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

        {token ? <FaUserCircle size={30} className="profile-icon" onClick={() => authDispatch({ type: authActions.LOGOUT })} /> : <Link to="/login" className="btn btn-solid-primary btn-sm btn-rounded-5">Login</Link>}
      </div>
    </header>
  )
}
