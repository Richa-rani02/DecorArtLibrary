import "../WatchLater/WatchLater.css";
import { VideoCard, Sidebar } from "../../components/index";
import { useStateContext } from "../../context/state-context";
export const Playlists = () => {
    const { state:{playlists}} = useStateContext();
    console.log(playlists);
    return (
        <>
            <Sidebar />
            <section className="category-video">
                <div className="category-video-container">
                  {playlists.map(play=>(
                      <>
                      <h2>{play.title}</h2>
                          {play.videos.map(clip=>(
                            <VideoCard key={clip._id} videos={clip} />
                          ))}
                      </>
                  ))}

                </div>
            </section>
        </>
    )
}