import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
export const Header = () => {

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
        <Link to="/" className="btn btn-solid-primary btn-sm btn-rounded-5">Login</Link>
      </div>
    </header>
  )
}