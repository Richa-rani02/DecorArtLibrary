import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/state-context";
import {dataActions} from "../../Utils/actions";
export const Header = () => {

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
        <Link to="/" className="btn btn-solid-primary btn-sm btn-rounded-5">Login</Link>
      </div>
    </header>
  )
}