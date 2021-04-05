// @flow
import React from 'react';
import Typography from '../../base/Typography/Typography';
import './notification.scss';

import dummy from './dummy.json';

type Props = {
    className?: string,
    isPartial?: boolean
}

export default function Notification({ className = '', isPartial = true }: Props): React$Element<any> {
    return (
        <div className={`notification ${className}`} >
            {dummy.map(item =>
                <div key={item.id} className='notification__item'>
                    <Typography>
                        {item.createdDate}
                    </Typography>
                    <Typography>
                        {item.description}
                    </Typography>
                </div>
            )}
        </div>
    );
}
