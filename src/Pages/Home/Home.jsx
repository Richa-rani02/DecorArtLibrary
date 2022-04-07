import "./Home.css";
import {Link} from "react-router-dom";
const Home=()=>{
    return(
        <section className="home-section">
        <div className="home-text">
        <h4 className="h1">Want to learn how to make DIY Decor Items for your home ?</h4>
        <p className="center-text top-gutter-sm">Learn from best</p>
        <div className="home-btn-container flex flex-center">
        <Link to="/explore" className="btn btn-solid-primary btn-lg btn-rounded-5 btn-color">Explore</Link>
       <Link to="/login" className="btn btn-outline-primary btn-lg btn-rounded-5">Login</Link>
       </div>
        </div>
        </section>
    )
}

export {Home};