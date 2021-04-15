// @flow
import React from 'react';
import { useLocation } from 'react-router';
import ManagementScreen from './ContractManagementScreen';

type Props = {
    routes: Array<any>
}
export default function ManagementContainer({ routes }: Props): React$Element<any> {
    const { pathname } = useLocation();

    return <ManagementScreen
        routes={routes}
        isParentRoute={pathname === '/contract-management'}/>;
}
