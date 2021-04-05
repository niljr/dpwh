// @flow
import React from 'react';
import { IoHome, IoStatsChart } from 'react-icons/io5';
import { useLocation, useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import './progress-step.scss';

type Props = {
    className?: string
}

export default function ProgressStep({ className = '' }: Props): React$Element<any> {
    const history = useHistory();
    const { pathname } = useLocation();

    const items = [{
        icon: IoHome,
        route: 'dashboard'
    }, {
        icon: IoStatsChart,
        route: 'management'
    }];

    const handleSelect = (route: string) => {
        if (!pathname.includes(route)) {
            history.push(`/${route}`);
        }
    };

    return (
        <div className={`progress-step ${className}`} >
            <hr/>
            {items.map(item =>
                <Button
                    key={item.route}
                    className='progress-step__button'
                    onClick={() => handleSelect(item.route)}
                    variant={pathname.includes(item.route) ? 'warning' : 'outline-light'}>
                    <Typography>
                        <item.icon size={30} color={pathname.includes(item.route) ? '#fff' : '#d1d1d1'}/>
                    </Typography>
                </Button>
            )}
        </div>
    );
}
