import React from "react";

function Video() {
    return (
       <div className="video-container">
            <div className="display">
                <a href="https://www.youtube.com/watch?v=zcSOU7Fjq80">
                    <img src="https://via.placeholder.com/300x180" alt="React Tutorial for Beginners" />
                </a>
                <span className="duration">2:00</span>
            </div>
            <div className="channel-logo">
                <img src="https://via.placeholder.com/36x36" alt="Logo" />
            </div>
            <div className="video-title">
                <a href="https://www.youtube.com/watch?v=zcSOU7Fjq80">
                    <h1>React Tutorial for Beginners</h1>
                </a>
                <div className="video-description">
                    <span className="channel-name">Learn React</span>
                    <span className="view-count">1.5k views .</span>
                    <span className="upload-time">1 month ago</span>
                </div>
            </div>
        </div> 
    );
}

export default Video;