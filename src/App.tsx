import React from 'react';
import { VideoPlayer } from './components/videoPlayer/videoPlayer';
import './style.scss';


export default function App() {
  let currentTime = 0;

  const handleCurrentTimeChage = (time: number) => {
    if (time == null) return;

    const seconds = Math.round(time);
    if (seconds != currentTime) {
      currentTime = seconds;
      console.log(seconds);
    }
    
  }

  return (
    <div className='appWrapper'>
      <VideoPlayer onTimeUpdate={handleCurrentTimeChage} />
      
    </div>)
}

