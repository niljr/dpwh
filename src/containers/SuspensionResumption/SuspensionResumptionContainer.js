// @flow
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SuspensionResumptionScreen from './SuspensionResumptionScreen';
import { setModalContent } from '../../redux/modules/modalEvent';
import AddSuspensionOrder from '../../components/modules/AddSuspensionOrder/AddSuspensionOrder';
import dummyData from './dummy.json';

export default function SuspensionResumptionContainer(): React$Element<any> {
    const dispatch = useDispatch();
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

    const handleOnClick = () => {
        dispatch(setModalContent({
            modalContent: <AddSuspensionOrder />,
            title: 'Suspension Details',
            size: 'lg'
        }));
    };

    return <SuspensionResumptionScreen
        isLoading={isLoading}
        data={data}
        handleOnClick={handleOnClick}/>;
}
