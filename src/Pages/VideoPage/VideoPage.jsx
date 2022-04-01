import "./VideoPage.css";

import { SingleVideo } from "./SingleVideo";
export const VideoPage = () => {
    return (
        <div className="video-page">
            <SingleVideo />
            <div className="notes_container">
                <div className="heading-container">
                    <p className="main-p center-text">Take Notes..✍️</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}