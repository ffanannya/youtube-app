import React from "react";

function Video({videoId,duration,thumbnailUrl,videoTitle,channelName,channelId}) {
    return (
       <div className="video-container">
            <div className="display">
                <a href={`https://www.youtube.com/watch?v=${videoId}`}>
                    <img src={thumbnailUrl} alt="React Tutorial for Beginners" width="300" height="180" />
                </a>
            </div>
            <div className="channel-logo">
                <img src="https://via.placeholder.com/36x36" alt="Logo" />
            </div>
            <div className="video-title">
                <a href={`https://www.youtube.com/watch?v=${videoId}`}>
                    <h1>{videoTitle}</h1>
                </a>
                <div className="video-description">
                    <a href={`https://www.youtube.com/channel/${decodeURI(channelId)}`}>
                        <span className="channel-name">{channelName}</span>
                    </a>
                </div>
            </div>
        </div> 
    );
}

export default Video;