export enum EventType {
  goal = 'goal',
  card = 'card',
  endHalf = 'endHalf',
  endGame = 'endGame'
}

interface IScore {
  home: number;
  away: number;
}

export interface IEvent {
  id: string;
  time: number;
  type: EventType;
  player?: string;
  cardType?: string;
  distanceOfShot?: number;
  newScore?: IScore;
}