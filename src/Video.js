import React from "react";

function Video({videoId, thumbnailUrl, videoTitle, channelName, channelId}) {
    return (
       <div className="video-container">
            <div className="display">
                <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank">
                    <img src={thumbnailUrl} alt="React Tutorial for Beginners" width="300" height="180" />
                </a>
            </div>
            <div className="channel-logo">
                <a href={`https://www.youtube.com/channel/${decodeURI(channelId)}`} target="_blank">
                    <img src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} height="36" width="36" alt="Channel Logo" />
                </a>
            </div>
            <div className="video-title">
                <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank">
                    <h1>{videoTitle}</h1>
                </a>
                <div className="channel-description">
                    <a href={`https://www.youtube.com/channel/${decodeURI(channelId)}`} target="_blank">
                        <span className="channel-name">{channelName}</span>
                    </a>
                </div>
            </div>
        </div> 
    );
}

export default Video;
