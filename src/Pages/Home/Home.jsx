import "./Home.css";
import {Link} from "react-router-dom";
const Home=()=>{
    return(
        <section className="home-section">
        <div className="home-text">
        <h4 className="h1">Learn to make DIY Decor Items with <span className="highlight-header">DecorArt !!</span> </h4>
        <div className="home-btn-container flex flex-center">
        <Link to="/explore" className="btn btn-solid-primary btn-sm btn-rounded-5 btn-color">Explore</Link>
       <Link to="/login" className="btn btn-outline-primary btn-sm btn-rounded-5 login-link center-text">Login</Link>
       </div>
        </div>
        </section>
    )
}

export {Home};