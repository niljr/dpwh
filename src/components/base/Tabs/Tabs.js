// @flow
import React, { useState } from 'react';
import { FaMedal, FaReceipt, FaLightbulb, FaCalendarCheck, FaRoad, FaClock, FaSnowplow, FaTasks } from 'react-icons/fa';
import Typography from '../Typography/Typography';
import './tabs.scss';

type Props = {
    className?: string
}

const items = [
    { label: 'Statement of Work\nAccomplished', key: 'accomplished', icon: FaMedal },
    { label: 'Billing', key: 'billing', icon: FaReceipt },
    { label: 'Actual Work Activity', key: 'actual-work', icon: FaSnowplow },
    { label: 'Time Variance', key: 'time-variance', icon: FaClock },
    { label: 'Potential VO', key: 'potential-vo', icon: FaLightbulb },
    { label: 'Milestones', key: 'milestones', icon: FaTasks },
    { label: 'Monthly/Weekly\nReviews', key: 'reviews', icon: FaCalendarCheck },
    { label: 'Actual Outputs', key: 'actual-output', icon: FaRoad }
];

export default function Tabs({ className = '' }: Props): React$Element<any> {
    const [active, setActive] = useState('accomplished');

    return (
        <div className={`tabs ${className}`} >
            {items.map(tab =>
                <div
                    key={tab.key}
                    className={`tabs__item${active === tab.key ? ' active' : ''}`}
                    onClick={() => setActive(tab.key)}>
                    <tab.icon size={22}/>
                    <Typography
                        variant='size-14'
                        weight='semi-bold'
                        className='tabs__item-label'>
                        {tab.label}
                    </Typography>
                </div>
            )}
        </div>
    );
}
