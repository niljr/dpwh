// @flow
import React, { useState } from 'react';
import { FaLightbulb, FaClock, FaSortDown } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import Typography from '../Typography/Typography';
import CustomToggle from '../CustomToggle';
import './tabs.scss';

type Props = {
    className?: string
}

const items = [
    // { label: 'Statement of Work\nAccomplished', key: 'accomplished', icon: FaMedal },
    // { label: 'Billing', key: 'billing', icon: FaReceipt },
    // { label: 'Actual Work Activity', key: 'actual-work', icon: FaSnowplow },
    {
        label: 'Time Variance',
        key: 'time-variance',
        icon: FaClock,
        subMenu: [
            { label: 'Suspension/Resumption', route: '/contract-management/suspension_resumption' },
            { label: 'Time Extension', route: '/contract-management/time-extension' }
        ]
    },
    { label: 'Potential VO', key: 'potential-vo', icon: FaLightbulb }
    // { label: 'Milestones', key: 'milestones', icon: FaTasks },
    // { label: 'Monthly/Weekly\nReviews', key: 'reviews', icon: FaCalendarCheck },
    // { label: 'Actual Outputs', key: 'actual-output', icon: FaRoad }
];

export default function Tabs({ className = '' }: Props): React$Element<any> {
    const history = useHistory();
    const { pathname } = useLocation();
    const [active, setActive] = useState('');

    const goToRoute = (route) => {
        history.push(route);
    };

    return (
        <div className={`tabs ${className}`} >
            {items.map(tab =>
                <div className='tabs__wrapper'>
                    {tab.subMenu
                        ? <Dropdown key={tab.key}>
                            <Dropdown.Toggle as={CustomToggle} >
                                <div
                                    onClick={() => setActive(tab.key)}
                                    className={`tabs__item${active === tab.key ? ' active' : ''}${tab.subMenu ? ' -with-submenu' : ''}`}>
                                    <tab.icon size={22}/>
                                    <Typography
                                        variant='size-14'
                                        weight='semi-bold'
                                        className='tabs__item-label'>
                                        {tab.label}
                                    </Typography>
                                    <FaSortDown className='mb-1 ml-2' />
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu align='right'>
                                {tab.subMenu.map(item =>
                                    <Dropdown.Item
                                        key={item.route}
                                        active={item.route === pathname}
                                        onClick={() => goToRoute(item.route)}>
                                        {item.label}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        : <div
                            key={tab.key}
                            className={`tabs__item${active === tab.key ? ' active' : ''}${tab.subMenu ? ' -with-submenu' : ''}`}
                            onClick={() => setActive(tab.key)}>
                            <tab.icon size={22}/>
                            <Typography
                                variant='size-14'
                                weight='semi-bold'
                                className='tabs__item-label'>
                                {tab.label}
                            </Typography>
                        </div>
                    }
                </div>
            )}
        </div>
    );
}
