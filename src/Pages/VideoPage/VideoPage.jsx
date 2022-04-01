import "./VideoPage.css"; 
import { SingleVideo } from "../../components/SingleVideo/SingleVideo";
export const VideoPage=()=>{
    return(
        <div className="videopage">
         <div className="video_note_panel">
          <div className="video_panel">
           <SingleVideo/>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod incidunt, cum ad necessitatibus dolorem nam numquam enim autem expedita assumenda sed ratione dolor? Mollitia, hic. Placeat quam possimus laudantium. */}
            
              </div> 
              <div className="note_panel">
              
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eligendi assumenda placeat, necessitatibus explicabo voluptatum corporis laborum atque, at veniam facere suscipit cum?</p> */}
              </div>   

         </div>

        </div>
    )
}