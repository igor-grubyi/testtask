import React, { useEffect, useState } from 'react'
import Ticker from 'react-ticker';
// import { Notifi, EnqueNotifi } from 'react-notifi';
import "react-notifi/dist/index.css";

import { fetchJson } from '../../utils/index';

const data  = require('../../../resources/events.json');

const url = 'https://gist.githubusercontent.com/jbreemhaar/449a78e2395cdc85837110447b77317d/raw/ae61e6c99a9db2a05c1d7f68a07e38d9404a7f0a/soccerGame.json';

interface IProps {
  currentTime: number;
  onEndGame: () => void;
}

export const Events: React.FunctionComponent<IProps> = (props) => {
  const [ticker, setTickets] = useState([]);
  const [events, setEvents] = useState([]);
  let currentTicker = -1;

  useEffect(() => {
    (async function fetch() {
      const eventsJSON = await fetchJson(url);

      setTickets(data.ticker);
      setEvents(data.events);
    })();
  }, []);

  const getTicker = () => {
    if (ticker.length > 0) {
      currentTicker ++;

      if (currentTicker > ticker.length)
        currentTicker = 0;

      return ticker[currentTicker].body;
    }
  }

  return (
    <div className='events'>
      {(ticker.length > 0) &&
        <Ticker mode={'smooth'}>
          {() => (<h2>{getTicker()}</h2>)}
        </Ticker>}

      {props.currentTime}
    </div>
  )
}
