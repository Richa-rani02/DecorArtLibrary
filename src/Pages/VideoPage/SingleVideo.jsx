import { BiLike, BiDislike } from "react-icons/bi";
import { AiFillLike, AiFillDislike, AiOutlineClockCircle } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";

export const SingleVideo = () => {
    return (
        <div className="single_video_container">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/IFQszfuIRdo`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
            ></iframe>
            <div className="video-footer top-gutter-sm">
                <h3 className="footer-title bottom-gutter-xs">Title</h3>
                <div className="footer-btn top-gutter-xs">
                    <div className="btn-right">
                        <div className="flex-container">
                            <BiLike size={24} className="right-gutter-sm video-icon" />
                            <span>Like</span>
                        </div>
                        <div className="flex-container">
                            <BiDislike size={24} className="right-gutter-sm video-icon" />
                            <span>Dislike</span>
                        </div>
                        <div className="flex-container">
                            <RiPlayListAddFill size={24} className="right-gutter-sm video-icon" />
                            <span>Save</span>
                        </div>
                        <div className="flex-container">
                            <AiOutlineClockCircle size={24} className="right-gutter-sm video-icon" />
                            <span>Watch Later</span>
                        </div>
                    </div>
                </div>
                <hr />

                <p className="footer-desc bottom-gutter-md">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia adipisci odit quam voluptas iste impedit quo dolorem, sunt doloribus quibusdam libero
                </p>
            </div>
        </div>
    )
}