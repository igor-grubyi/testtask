import React from 'react'

interface IProps {
  media: any;
}

export const Controls: React.FunctionComponent<IProps> = (props) => {
    
  const handlePlayPause = () => {
    (props.media.paused == true) ? props.media.play() : props.media.pause();
  }

  return (
    <div className='controls'>
      <button
        type="button"
        className='playPause'
        // style={style}
        onClick={handlePlayPause}
      >
        {props.media && props.media.paused ? 'Play' : 'Pause'}
      </button>
    </div>
  )
}
