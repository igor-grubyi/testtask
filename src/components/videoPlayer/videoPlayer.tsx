import React from 'react';
import './style.scss';

interface IProps {
  media: (ref: any) => void;
  onTimeUpdate: (currentTime: number) => void;
}

export const VideoPlayer: React.FunctionComponent<IProps> = React.memo(props => {
  console.log('Render video player');

  const setRef = (ref: any) => {
    if (ref == null)
      return;

    ref.addEventListener('timeupdate', () => props.onTimeUpdate(ref.currentTime));
    ref.addEventListener('fullscreenchange', () => console.log('Fulscreen detected'));
    props.media(ref);
  }

  return (
    <div className="player">
      <video
        autoPlay
        controls
        ref={setRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      >
        <p>Your browser doesn't support HTML5 video.</p>
      </video>

    </div>);
})
