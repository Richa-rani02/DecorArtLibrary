import "./Explore.css";
import { CategoryChip, VideoCard, Sidebar } from "../../components";
import { useStateContext } from "../../context/state-context";
import { ToastContainer } from "react-toastify";
import { searchVideos, sortVideos } from "./helper";
const Explore = () => {
    const { state: { videos, searchVideo, sortby }, drawer } = useStateContext();

    const searchbyName = searchVideos(videos, searchVideo);
    const sortByCategory = sortVideos(searchbyName, sortby);

    return (
        <>
            <Sidebar />

            <div className="explore">
                <div className="videolist_panel bottom-gutter-md">
                    <CategoryChip />
                    <section className="category-video-explore">
                        <div className="category-video-container-explore">
                            {sortByCategory.map((clip) => (
                                <VideoCard key={clip._id} videos={clip} />
                            ))}
                        </div>
                    </section>
                </div>
                <ToastContainer autoClose={2000} />
            </div>
        </>

    )
}

export { Explore };