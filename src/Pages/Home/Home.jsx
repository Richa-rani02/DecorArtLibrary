import "./Home.css";
import {Link} from "react-router-dom";
const Home=()=>{
    return(
        <div className="home">
        <h3>This is home</h3>
        <Link to="/explore" className="btn-sm">Go toExplore</Link>
        </div>
    )
}

export {Home};