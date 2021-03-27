import React, { useEffect, useState } from 'react'
import Ticker from 'react-ticker';
import { Notifications } from '../notifications/notifications';
import { fetchJson } from '../../utils/index';
import { IEvent, EventType } from '../models/event';
import './styles.scss';

const url = 'https://raw.githubusercontent.com/igor-grubyi/testtask/master/resources/events.json';

interface IProps {
  currentTime: number;
  onEndGame: () => void;
}

export const Events: React.FunctionComponent<IProps> = (props) => {
  const [ticker, setTickets] = useState([]);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [event, setEvent] = useState<IEvent>(null);
  const [endGameTime, setEndGameTime] = useState(Number.MAX_SAFE_INTEGER)

  let currentTicker = -1;

  useEffect(() => {
    (async function fetch() {
      const eventsJSON = await fetchJson(url);

      if (eventsJSON != null) {
        setTickets(eventsJSON.ticker);
        setEvents(eventsJSON.events);
        const endGame: IEvent = eventsJSON.events.find((ev: IEvent) => ev.type == EventType.endGame);

        if (endGame != null)
          setEndGameTime(endGame.time);
      }
    })();
  }, []);

  useEffect(() => {
    if (props.currentTime >= endGameTime)
      props.onEndGame();

    const currentEvent = events.find(ev => ev.time == props.currentTime);

    if (currentEvent != undefined)
      setEvent(currentEvent);

  }, [props.currentTime])

  const getTicker = () => {
    currentTicker++;

    if (currentTicker >= ticker.length)
      currentTicker = 0;

    return ticker[currentTicker].body;
  }

  return (
    <div className='events'>

      <div className='tickerWrapper'>
        {(ticker.length > 0) &&
          <Ticker mode='smooth' speed={10}>
            {() => (<h2>{getTicker()}</h2>)}
          </Ticker>}
      </div>

      {event && <Notifications notice={event} />}
    </div>
  )
}
