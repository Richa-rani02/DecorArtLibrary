import "./Explore.css";
import { CategoryChip, VideoCard } from "../../components";

const Explore = () => {
    return (
        <div className="explore">
            <CategoryChip />
            <section className="category-video">
                <h4 className="category-name">Macrame</h4>

                <div className="category-video-container">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
                <div className="category-video-container">

                </div>
                <div className="category-video-container">

                </div>
            </section>
        </div>
    )
}

export { Explore };