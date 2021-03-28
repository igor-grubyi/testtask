import React from 'react';
import './style.scss';

interface IProps {
  src: string;
  mediaRef: (ref: any) => void;
}

export const VideoPlayer: React.FunctionComponent<IProps> = React.memo(props => {

  return (
    <div className="player">

      <video
        data-testid="video"
        autoPlay
        controls
        ref={ref => props.mediaRef(ref)}
        src={props.src}>

        <p>Your browser doesn't support HTML5 video.</p>

      </video>

    </div>);
})
