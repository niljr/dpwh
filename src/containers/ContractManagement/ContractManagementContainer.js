// @flow
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { FaLightbulb, FaClock, FaSnowplow } from 'react-icons/fa';
import { setCurrentContract } from '../../redux/modules/contract';
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
        retrieveContractInformation();
    }, []);

    const retrieveContractInformation = () => {
        try {
            // TODO call api to get contract info

            setTimeout(() => {
                dispatch(setCurrentContract({
                    id: '15CH6730',
                    contractor: 'AQUASSEUR',
                    contractName: 'Consequat enim ut mollit culpa consequat magna consectetur do fugiat nisi excepteur elit enim veniam.',
                    description: 'Irure eu duis eu eu in duis sunt. Labore aliquip reprehenderit culpa mollit velit.',
                    effectivityDate: '04/10/2015',
                    expiryDate: '11/14/2017',
                    status: 'ongoing',
                    accomplishment: 35,
                    duration: 45,
                    cost: '489,997.70'
                }));
            }, 1000);
        } catch (error) {
            // TODO add logger
        }
    };

    return <ManagementScreen
        routes={routes}
        isParentRoute={pathname === '/contract-management'}
        tabItems={tabItems}/>;
}
