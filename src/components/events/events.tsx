import React, { useEffect, useState } from 'react'
import Ticker from 'react-ticker';
import { Notifications } from '../notifications/notifications';

import { fetchJson } from '../../utils/index';
import { IEvent, EventType } from '../models/event';

const url = 'https://raw.githubusercontent.com/igor-grubyi/testtask/master/resources/events.json';

interface IProps {
  currentTime: number;
  onEndGame: () => void;
}

export const Events: React.FunctionComponent<IProps> = (props) => {
  const [ticker, setTickets] = useState([]);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [event, setEvent] = useState<IEvent>(null);

  let currentTicker = -1;

  useEffect(() => {
    (async function fetch() {
      const eventsJSON = await fetchJson(url);

      setTickets(eventsJSON.ticker);
      setEvents(eventsJSON.events);
    })();
  }, []);

  useEffect(() => {
    const currentEvent = events.find(ev => ev.time == props.currentTime);
    
    if (currentEvent != undefined)
      (currentEvent.type == EventType.endGame) ? props.onEndGame() : setEvent(currentEvent);

  }, [props.currentTime])

  const getTicker = () => {
    if (ticker.length > 0) {
      currentTicker ++;

      if (currentTicker >= ticker.length)
        currentTicker = 0;

      return ticker[currentTicker].body;
    }
  }

  return (
    <div className='events'>
      {(ticker.length > 0) &&
        <Ticker mode='smooth'>
          {() => (<h2>{getTicker()}</h2>)}
        </Ticker>}

      {props.currentTime}
      {event && <Notifications notice={event} />}
    </div>
  )
}
