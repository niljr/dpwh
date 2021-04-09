// @flow
import React, { useEffect, useState } from 'react';
import ManagementScreen from './ContractManagementScreen';

export default function ManagementContainer(): React$Element<any> {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return <ManagementScreen isLoading={isLoading}/>;
}
