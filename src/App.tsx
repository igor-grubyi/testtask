import React, { Component } from 'react';
import { SnackbarProvider } from 'notistack';
import { Events } from './components/events/events';
import { VideoPlayer } from './components/videoPlayer/videoPlayer';
import './style.scss';

interface IState {
  currentTime: number;
}
export default class App extends Component<{}, IState> {
  public state = { currentTime: 0 };

  private handleCurrentTimeChage = (time: number) => {
    if (time == null) return;

    const seconds = Math.round(time);

    if (seconds != this.state.currentTime)
      this.setState({ currentTime: seconds });
  }


  public render() {
    console.log('Render App');

    return (
      <SnackbarProvider
        autoHideDuration={7000}
        maxSnack={10}
        hideIconVariant
        dense
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>

        <div className='appWrapper'>
          <VideoPlayer onTimeUpdate={this.handleCurrentTimeChage} />

          <Events currentTime={this.state.currentTime} onEndGame={() => { console.log('end game') }} />
        </div>

      </SnackbarProvider>)
  }
}

