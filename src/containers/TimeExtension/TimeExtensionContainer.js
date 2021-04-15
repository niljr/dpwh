// @flow
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TimeExtensionScreen from './TimeExtensionScreen';
import { setModalContent } from '../../redux/modules/modalEvent';
import dummyData from './dummy.json';
import { capitalize } from '../../utils/helpers';

export default function TimeExtensionContainer(): React$Element<any> {
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

    const handleToggleForm = (actionType: 'edit' | 'add', data) => {
        dispatch(setModalContent({
            modalContent: <div>hello</div>,
            title: `${capitalize(actionType)} Time Extension`
        }));
    };

    return <TimeExtensionScreen
        isLoading={isLoading}
        data={data}
        handleToggleForm={handleToggleForm} />;
}
