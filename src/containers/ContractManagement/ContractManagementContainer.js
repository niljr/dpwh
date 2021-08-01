// @flow
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { FaLightbulb, FaClock, FaSnowplow } from 'react-icons/fa';
import { setCurrentContract } from '../../redux/modules/contract';
import { getTaskByContractId } from '../../api/tasks';
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
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const { searchIdType, searchId } = useSelector(({ contract }) => contract);

    useEffect(() => {
        if (searchId) {
            retrieveContractInformation();
        }
    }, [searchId]);

    const retrieveContractInformation = async () => {
        try {
            const task = await getTaskByContractId(searchId);

            dispatch(setCurrentContract(task));
            console.log(task);
        } catch (error) {
            console.log('FETCH contract error', error);
        }
    };

    return <ManagementScreen
        routes={routes}
        isParentRoute={pathname === '/contract-management'}
        tabItems={tabItems}/>;
}
