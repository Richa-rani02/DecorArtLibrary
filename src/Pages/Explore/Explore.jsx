import "./Explore.css";
import { CategoryChip, VideoCard } from "../../components";
import { useStateContext } from "../../context/state-context";

const Explore = () => {
    const {state:{videos}}=useStateContext();

    return (
        <div className="explore">
            <CategoryChip />
            <section className="category-video">
                    <h4 className="category-name">Mandala Designs</h4>
                    <div className="category-video-container">
                    {videos.map((clip)=>(
                    <VideoCard key={clip._id} videos={clip}/>
                ))}
                </div>
            </section>
        </div>
    )
}

export { Explore };