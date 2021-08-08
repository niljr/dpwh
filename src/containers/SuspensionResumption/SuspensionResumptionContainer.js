// @flow
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaRegEdit } from 'react-icons/fa';
import Button from '../../components/base/Button/Button';
import SuspensionResumptionScreen from './SuspensionResumptionScreen';
import { setModalContent } from '../../redux/modules/modalEvent';
import { getAllSuspensions } from '../../api/suspensions';
import { setFlashNotification } from '../../redux/modules/flashNotification';
import SuspensionOrderForm from '../../components/modules/SuspensionOrderForm/SuspensionOrderForm';

export default function SuspensionResumptionContainer(): React$Element<any> {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        prepareData();
    }, []);

    const prepareData = async () => {
        try {
            const data = await getAllSuspensions();

            setData(data.map(item => ({
                ...item,
                edit: <Button variant='link' onClick={() => handleEdit(item)}>
                    <FaRegEdit />
                </Button>
            })));
            setIsLoading(false);
        } catch (error) {
            dispatch(setFlashNotification({
                message: 'Failed to retrieve suspensions',
                isError: true
            }));
            setIsLoading(false);
        }
    };

    const handleUpdatedSuspension = (suspension, isUpdating) => {
        if (isUpdating) {
            prepareData();
        } else {
            setData([...data, suspension]);
        }
    };

    const handleEdit = (item: any) => {
        handleToggleSuspensionForm(item);
    };

    const handleToggleSuspensionForm = (item: any = {}) => {
        dispatch(setModalContent({
            modalContent: <SuspensionOrderForm
                count={data.length}
                handleUpdatedSuspension={handleUpdatedSuspension}
                suspension={item} />,
            title: 'Suspension Details',
            size: 'lg'
        }));
    };

    return <SuspensionResumptionScreen
        isLoading={isLoading}
        data={data}
        handleOnClick={handleToggleSuspensionForm}/>;
}
