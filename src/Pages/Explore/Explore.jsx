import "./Explore.css";
import { CategoryChip, VideoCard, Sidebar } from "../../components";
import { useStateContext } from "../../context/state-context";
import { searchVideos, sortVideos } from "./helper";
import { useLocation } from "react-router-dom";
import {Empty} from "../index";
const Explore = () => {
    const { state: { videos, searchVideo, sortby }} = useStateContext();
    const location = useLocation();
    const searchbyName = searchVideos(videos, searchVideo);
    const sortByCategory = sortVideos(searchbyName, sortby);

    return (
        <>
            <Sidebar />
          {sortByCategory.length>0 ?
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
      </div>
      :
      <Empty path={location.pathname}/>
          }
            
        </>

    )
}

export { Explore };