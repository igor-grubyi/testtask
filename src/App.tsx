import React, { Component } from 'react';
import { SnackbarProvider } from 'notistack';
import { Events } from './components/events/events';
import { VideoPlayer } from './components/videoPlayer/videoPlayer';
import './styles.scss';

const videoSrc = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

interface IState {
  startPlaying: boolean;
  videoIsReady: boolean;
  currentTime: number;
}
export default class App extends Component<{}, IState> {
  public state = { currentTime: 0, videoIsReady: false, startPlaying: true };
  private media: any;

  private handleCurrentTimeChage = () => {
    const seconds = Math.round(this.media.currentTime);

    if ((seconds > 0) && (this.state.videoIsReady == false))
      this.setState({ videoIsReady: true });

    if (seconds != this.state.currentTime)
      this.setState({ currentTime: seconds });
  }

  private handleEndGame = () => {
    this.media.removeEventListener('timeupdate', this.handleCurrentTimeChage);
    this.media.currentTime = 0;
    this.media.pause();
    this.media.removeAttribute('src');
    this.media.load();
    this.setState({ videoIsReady: false, startPlaying: false });
  }

  private setMediaRef = (ref: any) => {
    if (ref == null)
      return;

    this.media = ref;
    this.media.addEventListener('timeupdate', this.handleCurrentTimeChage);
  }


  public render() {
    return (
      <div className='appRoot'>
        <div className='blur'>
          {(this.state.startPlaying == true)

            ? <SnackbarProvider
              autoHideDuration={7000}
              maxSnack={10}
              hideIconVariant
              dense
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>

              <div className='mediaWrapper'>
                <VideoPlayer src={videoSrc} mediaRef={this.setMediaRef} />

                {this.state.videoIsReady && <Events currentTime={this.state.currentTime} onEndGame={this.handleEndGame} />}
              </div>

            </SnackbarProvider>
            
            : <button data-testid="replay-button" className='replay' onClick={() => this.setState({ startPlaying: true })} />}

        </div>
      </div>)
  }
}

