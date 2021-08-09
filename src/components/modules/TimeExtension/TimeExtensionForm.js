// @flow
import React, { useState } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../base/Form/Form';
import formStructure from './timeExtensionFormStructure';
import { setFlashNotification } from '../../../redux/modules/flashNotification';
import { clearModalContent } from '../../../redux/modules/modalEvent';
import { zeroPadded } from '../../../utils/helpers';
import './time-extension-form.scss';
import { addTimeExtension, updateTimeExtension } from '../../../api/timeExtensions';

type Props = {
    className?: string,
    timeExtension?: any,
    handleUpdatedTimeExtension: (newEntry: any, isUpdating: boolean) => void,
    count: number
}

const schema = yup.object().shape({
    timeExtensionNumber: yup.string(),
    reasonForTimeExtension: yup.string(),
    approvedBy: yup.string(),
    duration: yup.number().min(1),
    designation: yup.string(),
    additionalDuration: yup.number().min(0),
    dateApproved: yup.date().nullable(),
    status: yup.string()
});

export default function AddTimeExtension({ className = '', timeExtension = {}, count, handleUpdatedTimeExtension }: Props): React$Element<any> {
    console.log(timeExtension);

    const defaultValue = {
        timeExtensionNumber: zeroPadded(count + 1, 2),
        duration: 60,
        additionalDuration: 0,
        ...timeExtension,
        dateApproved: timeExtension.hasOwnProperty('dateApproved') ? new Date(timeExtension.dateApproved) : new Date()
    };

    const dispatch = useDispatch();
    const { currentContract } = useSelector(({ contract }) => contract);
    const [isProcessing, setIsProcessing] = useState(false);

    const onSubmitForm = async (data) => {
        try {
            setIsProcessing(true);

            const func = Object.keys(timeExtension).length ? updateTimeExtension : addTimeExtension;
            const returnedData = await func({
                ...data,
                taskId: currentContract._id
            }, timeExtension ? timeExtension._id : null);

            handleUpdatedTimeExtension(returnedData, !!timeExtension);
            setIsProcessing(false);
            dispatch(clearModalContent());
        } catch (error) {
            setIsProcessing(false);
            dispatch(setFlashNotification({
                message: `Failed to ${timeExtension ? 'update' : 'add'} time extension`,
                isError: true
            }));
        }
    };

    return (
        <div className={`time-extension-form ${className}`} >
            <Form
                data={defaultValue}
                structure={formStructure}
                onSubmitForm={onSubmitForm}
                schema={schema}
                formSize='sm'
                withCloseButton={true}
                isProcessing={isProcessing} />
        </div>
    );
}
