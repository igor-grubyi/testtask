import React from 'react';

import { IEvent } from '../models/event';

interface IProps {
    notice: IEvent;
}

export const Notifications: React.FunctionComponent<IProps> = ({ notice }) => {

    return (
        <div className='notification'>
            <button>Show</button>
        </div>
    );
}
