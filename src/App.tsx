import React, { Component } from 'react';
import { SnackbarProvider } from 'notistack';
import { Events } from './components/events/events';
import { VideoPlayer } from './components/videoPlayer/videoPlayer';
import './styles.scss';

interface IState {
  startPlaying: boolean;
  videoIsReady: boolean;
  currentTime: number;
}
export default class App extends Component<{}, IState> {
  public state = { currentTime: 0, videoIsReady: false, startPlaying: true };
  private media: any;

  private handleCurrentTimeChage = (time: number) => {
    if (time == null) return;

    const seconds = Math.round(time);

    if ((seconds > 0) && (this.state.videoIsReady == false))
      this.setState({ videoIsReady: true });

    if (seconds != this.state.currentTime)
      this.setState({ currentTime: seconds });
  }

  private handleEndGame = () => {
    this.media.currentTime = 0;
    this.media.pause();
    this.media.removeAttribute('src');
    this.media.load();
    this.setState({ videoIsReady: false, startPlaying: false });
  }

  private setMedia = (ref: any) => {
    this.media = ref;
  }


  public render() {
    console.log('Render App');
    return (
      <div className='appRoot'>
        <div className='blur'>
          {(this.state.startPlaying == false)
            ? <button data-testid="play-button" className='play' onClick={() => this.setState({ startPlaying: true })} />

            : <SnackbarProvider
              autoHideDuration={5000}
              maxSnack={10}
              hideIconVariant
              dense
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>

              <div className='mediaWrapper'>
                {this.state.startPlaying && <VideoPlayer onTimeUpdate={this.handleCurrentTimeChage} media={this.setMedia} />}

                {this.state.videoIsReady && <Events currentTime={this.state.currentTime} onEndGame={this.handleEndGame} />}
              </div>

            </SnackbarProvider>}
        </div>
      </div>)
  }
}

