// @flow
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaRegEdit } from 'react-icons/fa';
import Button from '../../components/base/Button/Button';
import TimeExtensionScreen from './TimeExtensionScreen';
import TimeExtensionForm from '../../components/modules/TimeExtension/TimeExtensionForm';
import { setModalContent } from '../../redux/modules/modalEvent';
import { setFlashNotification } from '../../redux/modules/flashNotification';
import { getAllTimeExtensions } from '../../api/timeExtensions';

export default function TimeExtensionContainer(): React$Element<any> {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        prepareData();
    }, []);

    const prepareData = async () => {
        try {
            const data = await getAllTimeExtensions();

            setData(data.map(item => ({
                ...item,
                edit: <Button variant='link' onClick={() => handleEdit(item)}>
                    <FaRegEdit />
                </Button>
            })));
            setIsLoading(false);
        } catch (error) {
            dispatch(setFlashNotification({
                message: 'Failed to retrieve time extensions',
                isError: true
            }));
            setIsLoading(false);
        }
    };

    const handleUpdatedTimeExtension = (suspension, isUpdating) => {
        if (isUpdating) {
            prepareData();
        } else {
            setData([...data, suspension]);
        }
    };

    const handleEdit = (item: any) => {
        handleToggleTimeExtensionForm(item);
    };

    const handleToggleTimeExtensionForm = (item: any = {}) => {
        dispatch(setModalContent({
            modalContent: <TimeExtensionForm
                count={data.length}
                handleUpdatedTimeExtension={handleUpdatedTimeExtension}
                timeExtension={item} />,
            title: `${item ? 'Edit' : 'Add'} Time Extension`,
            size: 'lg'
        }));
    };

    return <TimeExtensionScreen
        isLoading={isLoading}
        data={data}
        handleToggleForm={handleToggleTimeExtensionForm} />;
}
