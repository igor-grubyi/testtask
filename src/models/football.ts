import { IBaseEvent } from "./base";

interface IScore {
  home: number;
  away: number;
}
export interface IFootballEvent extends IBaseEvent {
  player: string;
  cardType: string;
  distanceOfShot: number;
  newScore: IScore;
}