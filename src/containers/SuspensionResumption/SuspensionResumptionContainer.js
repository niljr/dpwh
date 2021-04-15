// @flow
import React, { useState, useEffect } from 'react';
import SuspensionResumptionScreen from './SuspensionResumptionScreen';
import dummyData from './dummy.json';

export default function SuspensionResumptionContainer(): React$Element<any> {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        prepareDate();
    }, []);

    const prepareDate = () => {
        setTimeout(() => {
            setData(dummyData);
            setIsLoading(false);
        }, 500);
    };

    return <SuspensionResumptionScreen
        isLoading={isLoading}
        data={data} />;
}
