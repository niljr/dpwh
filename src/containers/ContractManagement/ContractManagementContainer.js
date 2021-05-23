// @flow
import React from 'react';
import { useLocation } from 'react-router';
import { FaLightbulb, FaClock, FaSnowplow } from 'react-icons/fa';
import ManagementScreen from './ContractManagementScreen';

type Props = {
    routes: Array<any>
}

const tabItems = [
    { label: 'Construction Schedule', key: 'construction-schedule', icon: FaSnowplow, route: '/contract-management/construction-schedule/approved' },
    {
        label: 'Time Variance',
        key: 'time-variance',
        icon: FaClock,
        route: null,
        subMenu: [
            { label: 'Suspension/Resumption', route: '/contract-management/time-variance/suspension_resumption' },
            { label: 'Time Extension', route: '/contract-management/time-variance/time-extension' }
        ]
    },
    { label: 'Potential VO', key: 'potential-vo', icon: FaLightbulb, route: '/contract-management/potential-vo', subMenu: null }
];

export default function ManagementContainer({ routes }: Props): React$Element<any> {
    const { pathname, search } = useLocation();

    console.log(search);

    return <ManagementScreen
        routes={routes}
        isParentRoute={pathname === '/contract-management'}
        tabItems={tabItems}/>;
}
