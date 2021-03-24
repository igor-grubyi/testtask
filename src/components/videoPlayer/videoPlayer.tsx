import React, { LegacyRef, useRef, useState } from 'react';
import { Controls } from '../controls/controls';
import './style.scss';

const PLAYER_STATE = {
  PLAYING: 'PLAYING',
  PAUSE: 'PAUSE'
}

interface IProps {
  onTimeUpdate: (currentTime: number) => void;
}

export const VideoPlayer: React.FunctionComponent<IProps> = (props) => {
  const [media, setMedia] = useState(useRef(null));
  
  const getRef = (ref: any) => {
    if (ref == null)
      return;

    ref.addEventListener('timeupdate', () => props.onTimeUpdate(ref.currentTime));
    setMedia(ref);    
  }

  return (
    <div className="player">
      <video
        controls
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ref={getRef}
      >
          <p>Your browser doesn't support HTML5 video.</p>
      </video>

      <Controls media={media} />
    </div>);
}