import React, { useState } from 'react';
import { Events } from './components/events/events';
import { VideoPlayer } from './components/videoPlayer/videoPlayer';
import './style.scss';


export default function App() {
  const [currentTime, setCurrentTime] = useState(0); 

  const handleCurrentTimeChage = (time: number) => {
    if (time == null) return;

    const seconds = Math.round(time);

    if (seconds != currentTime)
      setCurrentTime(seconds);
  }

  return (
    <div className='appWrapper'>
      <VideoPlayer onTimeUpdate={handleCurrentTimeChage} />
      
      <Events currentTime={currentTime} onEndGame={() => {console.log('end game')}} />
    </div>)
}

