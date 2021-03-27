import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { getTime } from '../../utils';
import { IBaseEvent } from '../../models/base';

interface IProps {
  notice: IBaseEvent;
}

export const BaseNotice: React.FunctionComponent<IProps> = React.memo(({ notice }) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const action = () => <span>{getTime(notice.time)}</span>;

    enqueueSnackbar(notice.type, { variant: 'info', action });
  })

  return null;
})
