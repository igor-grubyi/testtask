import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { getTime } from '../../utils';
import { EventType } from '../../models/base';
import { IFootballEvent } from '../../models/football';

interface IProps {
	notice: IFootballEvent;
}

export const FootballNotice: React.FunctionComponent<IProps> = React.memo(({ notice }) => {
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		let message;
		const action = () => (<span>{getTime(notice.time)}</span>);

		if (notice.type == EventType.card) {
			message = <div style={{ textTransform: 'capitalize' }}>{`${notice.cardType} card. ${notice.player}`}</div>;

			(notice.cardType == 'red')
				? enqueueSnackbar(message, { variant: 'error', action })
				: enqueueSnackbar(message, { variant: 'warning', action });

		} else if (notice.type == EventType.endHalf) {
			message = 'End of half';
			enqueueSnackbar(message, { variant: 'info', action });

		} else if (notice.type == EventType.goal) {
			message = `Goal! ${notice.player}. Distance: ${notice.distanceOfShot}`;
			enqueueSnackbar(message, { variant: 'success', action });

			message = `Score ${notice.newScore.home} : ${notice.newScore.away}`;
			enqueueSnackbar(message, { variant: 'info', action });
		}
	});

	return null;
})
