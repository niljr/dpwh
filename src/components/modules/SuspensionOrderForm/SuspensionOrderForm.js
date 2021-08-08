// @flow
import React, { useState } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../base/Form/Form';
import { setFlashNotification } from '../../../redux/modules/flashNotification';
import { clearModalContent } from '../../../redux/modules/modalEvent';
import { updateSuspension, addSuspension } from '../../../api/suspensions';
import { zeroPadded } from '../../../utils/helpers';
import formStructure from './suspensionOrderFormStructure';
import './suspension-order-form.scss';

type Props = {
    className?: string,
    suspension?: any,
    handleUpdatedSuspension: (newEntry: any, isUpdating: boolean) => void,
    count: number
}

const schema = yup.object().shape({
    orderNumber: yup.string(),
    status: yup.string(),
    reasonForSuspension: yup.string(),
    dateApproved: yup.date().nullable(),
    suspensionEffectivityDate: yup.date(),
    approvalLevel: yup.string(),
    extent: yup.string(),
    approvedBy: yup.string(),
    description: yup.string(),
    designation: yup.string(),
    suspendedToDate: yup.number().min(1),
    taskId: yup.string()
});

export default function SuspensionOrderForm({ className = '', suspension = {}, count, handleUpdatedSuspension }: Props): React$Element<any> {
    const dispatch = useDispatch();
    const { currentContract } = useSelector(({ contract }) => contract);
    const [isProcessing, setIsProcessing] = useState(false);
    const defaultValue = {
        orderNumber: `WS${zeroPadded(count + 1, 2)}`, // <-- What is WS?
        ...suspension,
        suspensionEffectivityDate: new Date(suspension.hasOwnProperty('suspensionEffectivityDate') ? suspension.suspensionEffectivityDate : '')
    };

    const onSubmitForm = async (data) => {
        try {
            setIsProcessing(true);

            const func = Object.keys(suspension).length ? updateSuspension : addSuspension;
            const returnedData = await func({
                ...data,
                taskId: currentContract._id
            }, suspension ? suspension._id : null);

            handleUpdatedSuspension(returnedData, !!suspension);
            setIsProcessing(false);
            dispatch(clearModalContent());
        } catch (error) {
            setIsProcessing(false);
            dispatch(setFlashNotification({
                message: `Failed to ${suspension ? 'update' : 'add'} revision`,
                isError: true
            }));
        }
    };

    return (
        <div className={`suspension-order-form ${className}`} >
            <Form
                onSubmitForm={onSubmitForm}
                structure={formStructure}
                schema={schema}
                formSize='sm'
                withCloseButton={true}
                isProcessing={isProcessing}
                data={defaultValue} />
        </div>
    );
}
