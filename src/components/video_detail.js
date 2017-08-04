import React from 'react';
import  './../styles/style.css'


const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="video-detail col-8" >
       <div className="embed-reponsive embed-responsive-16by9" >
        <iframe className="embed-responsive-item video-item" src={url} allowfullscreen></iframe>
       </div>
      <div className="details" >
        <div>{video.snippet.title}</div>
        <hr/>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;