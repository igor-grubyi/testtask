import React, { useEffect } from 'react';
import { useSnackbar, VariantType } from 'notistack';
import { EventType, IEvent } from '../models/event';
import { getTime } from '../../utils';

interface IProps {
    notice: IEvent;
}

export const Notifications: React.FunctionComponent<IProps> = React.memo(({ notice }) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        let message;
  
        if (notice.type == EventType.card) {
            message = `${notice.player} - ${notice.cardType} card`;
            
            (notice.cardType == 'red')
                ? enqueueSnackbar(message, { variant: 'error' })
                : enqueueSnackbar(message, { variant: 'warning' });
        
        } else if (notice.type == EventType.endHalf) {
            message = `End of half  ${getTime(notice.time)}`;
            enqueueSnackbar(message, { variant: 'info' });

        } else if (notice.type == EventType.goal) {
            message = `Goal! ${notice.player}. Distance: ${notice.distanceOfShot}`;
            enqueueSnackbar(message, { variant: 'success' });

            message = `Score -  ${notice.newScore.home} : ${notice.newScore.away}`;
            enqueueSnackbar(message, { variant: 'info'});
        }

        

    });

    console.log('Render Notifications');

    return null;
})
