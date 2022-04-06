import "./Error.css";
import { useNavigate } from "react-router-dom";
export const Error404=()=>{
    let navigate=useNavigate();
    return(
        <>
        <div className="error-page flex-col">
            <div className="error-img">
                <img src="../Assets/404.png" className="img-responsive" alt="errorstate" />
            </div> 
            <button className="btn btn-solid-primary btn-sm btn-rounded-2r btn-color" onClick={() => navigate("/")}>Explore Now</button>
            
        </div>
        </>
    )
}