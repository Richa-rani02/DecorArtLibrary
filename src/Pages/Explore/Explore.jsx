import "./Explore.css";
import { CategoryChip, VideoCard, Sidebar } from "../../components";
import { useStateContext } from "../../context/state-context";
import { searchVideos, sortVideos } from "./helper";
const Explore = () => {
    const { state: { videos, searchVideo, sortby }, drawer } = useStateContext();

    const searchbyName = searchVideos(videos, searchVideo);
    const sortByCategory = sortVideos(searchbyName, sortby);

    return (
        <div className="explore">
            <div className="navigation_videolist_panel">
                <div className={`navigation_panel ${drawer && 'active'}`}>
                    <Sidebar />
                </div>
                <div className="videolist_panel bottom-gutter-md">
                    <CategoryChip />
                    <section className="category-video">
                        <div className="category-video-container">
                            {sortByCategory.map((clip) => (
                                <VideoCard key={clip._id} videos={clip} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

export { Explore };