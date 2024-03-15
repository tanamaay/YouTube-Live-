import React, { useEffect, useState } from 'react'
import {YOUTUBE_VEDIOS_API } from '../utils/contants';
import VideoCard,{AdVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VEDIOS_API);
    const json = await data.json();
     console.log(json.items);
    setVideos(json.items);
  }

  return (
    <div className="flex flex-wrap">
     {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos.map(vedio => (
        <Link key={vedio.id} to={"/watch?v=" + vedio.id}>
          <VideoCard  info={vedio} />
        </Link>
      ))}
    </div>
  )
};

export default VideoContainer