import { HiDotsVertical } from "react-icons/hi";
 export const PlaylistCard = ({playlistfolder}) => {
     const{_id,title,videos}=playlistfolder;
    return (
        <div className="playlistcard">
            {videos.length>0 &&
            <>
            <div className="img-container rad-5x">
            <img src={`https://img.youtube.com/vi/${videos[0]._id}/0.jpg`} alt="video" className="clip" />
          </div>
          <div className="trans-drawer flex-container">
             <span className="small-text">{videos.length}{videos.length<0 && '+'}</span>
          </div>
              </>
        } 
            <div className="playlist-desc">
             <span>{title}</span>
             <HiDotsVertical size={24} className=""/>
            </div>

        </div>
    )
}