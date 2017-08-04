import React from 'react';
import VideoListItem from './video_list_item'
import  './../styles/style.css'

const VideoList = (props) => {
  return (
    <ul className="list-group col-4" >
      {props.videos.map((video) => {
        return (
          <VideoListItem
            onVideoSelect = {props.onVideoSelect}
            key={video.etag}
            video={video} />
        )})}
    </ul>
  );
};

export default VideoList;