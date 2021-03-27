import { FootballNotice } from './footballNotice';
import { BaseNotice } from './baseNotice';

export const TYPE = {
  football: 'football',
  tennis: 'tennis'
}

export const getNoticeByType = (type: string) => {
  switch (type) {
    case TYPE.football:
      return FootballNotice;

    case TYPE.tennis:
    // return Tennis; // for example

    default: return BaseNotice;
  }
}