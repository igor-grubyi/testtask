export enum EventType {
  goal = 'goal',
  card = 'card',
  endHalf = 'endHalf',
  endGame = 'endGame'
}

export interface IBaseEvent {
  id: string;
  time: number;
  type: EventType;
}