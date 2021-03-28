## Test task
App to show notifications in a soccer game on the player graphically.


## App component
The root component that renders all other components depends on the state.

## VideoPlayer component
Renders <video> element with video and controls
### src: prop
This is the source of the media you want to play.
### mediaRef: prop
Callback function that receive reference on <video> element


## Events component
Renders two types of evets, Ticker and Notifications. Data for events is fetched from API.
### currentTime: prop
Current video time in seconds.
### onEndGame: prop
Calback when current video time >= endGame time


## Notice component
There is one baseNotice component which uses by default.
There is one specified component - footballNotice. It uses if video types equal football.
To enhance the app to support other types of sports appropriate Notice components should be created.
I added videoType field equal football to the Event JSON file to let the Events component know what type of notifications it should use.
### notice: prop
Object with info about an event.


## utils
### fetchJson
Method to fetch Event JSON file. Accept url.
### getTime
Method accepts time in seconds and returns time in usual football format mm:ss


## Running Locally

clone repo

`git clone https://github.com/igor-grubyi/testtask.git`

move into folder

`cd testtask`

install dependencies

`npm install`

run dev mode

`npm run start`

open your browser and visit: `http://localhost:8080/`

to test

`npm run test`
