import "./Explore.css";
import { CategoryChip, VideoCard, Sidebar } from "../../components";
import { useStateContext } from "../../context/state-context";
import { searchVideos, sortVideos,sortVideosByDates } from "./helper";
import { useLocation } from "react-router-dom";
import { dataActions } from "../../Utils/actions";
import { Empty } from "../index";
const Explore = () => {
    const { state: { videos, searchVideo, filterByCategory,sortby }, dispatch } = useStateContext();
    const location = useLocation();
    const searchbyName = searchVideos(videos, searchVideo);
    const sortByCategory = sortVideos(searchbyName, filterByCategory);
    const sortByDates=sortVideosByDates(sortByCategory,sortby);
    return (
        <>
            <Sidebar />
            <div className="explore">
                <div className="videolist_panel bottom-gutter-md">
                    <CategoryChip />
                    <section className="filter-section">
                        <select name="sortbydate" value={sortby} onChange={(e)=>dispatch({ type: dataActions.SORT_BY, payload: e.target.value })}>
                            <option>Latest</option>
                            <option>Oldest</option>
                        </select>
                        <input className="search-box" type="search" placeholder="search videos....." value={searchVideo} onChange={(e) => dispatch({ type: dataActions.SEARCH, payload: e.target.value })}>
                        </input>
                    </section>
                    {sortByDates.length > 0 ?
                        <section className="category-video-explore">
                            <div className="category-video-container-explore">
                                {sortByDates.map((clip) => (
                                    <VideoCard key={clip._id} videos={clip} />
                                ))}
                            </div>
                        </section>
                        :
                        <Empty path={location.pathname} />
                    }
                </div>
            </div>

        </>

    )
}

export { Explore };