import React, { useEffect, useState } from 'react'
import { fetchJson } from '../../utils/index';
const data =  require('../../../../events.json');

const url = 'https://gist.githubusercontent.com/jbreemhaar/449a78e2395cdc85837110447b77317d/raw/ae61e6c99a9db2a05c1d7f68a07e38d9404a7f0a/soccerGame.json';

interface IProps {
  currentTime: number;
  onEndGame: () => void;
}

export const Events: React.FunctionComponent<IProps> = (props) => {
  const [tickets, setTickets] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    (async function fetch() {
      const eventsJSON = await fetchJson(url);

      setTickets(data.ticker);
      setEvents(data.events);
    })();
  }, []);

  return (
    <div className='events'>
      {props.currentTime}
    </div>
  )
}
