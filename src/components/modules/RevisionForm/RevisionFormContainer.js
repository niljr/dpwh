// @flow
import React, { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import formStructure from './RevisionForm';
import Form from '../../base/Form/Form';
import { addRevision, updateRevision } from '../../../api/revisions';
import { zeroPadded } from '../../../utils/helpers';
import { setFlashNotification } from '../../../redux/modules/flashNotification';
import { clearModalContent } from '../../../redux/modules/modalEvent';

type Props = {
    className?: string,
    count: number,
    handleUpdatedRevision: (newEntry: any, isUpdating: boolean) => void,
    revision: any
}

const schema = yup.object().shape({
});

export default function RevisionFormContainer({ className = '', count, handleUpdatedRevision, revision = {} }: Props): React$Element<any> {
    const dispatch = useDispatch();
    const defaultValue = {
        revisionNumber: zeroPadded(count + 1, 2),
        dateEntry: new Date(),
        ...revision
    };
    const [isProcessing, setIsProcessing] = useState(false);

    const onSubmitForm = async (data) => {
        try {
            setIsProcessing(true);

            const func = revision ? updateRevision : addRevision;
            const newRevision = await func(data, revision ? revision._id : null);

            handleUpdatedRevision(newRevision, !!revision);
            setIsProcessing(false);
            dispatch(clearModalContent());
        } catch (error) {
            setIsProcessing(false);
            dispatch(setFlashNotification({
                message: 'Failed to add new revision',
                isError: true
            }));
        }
    };

    return (
        <div className={`add-revision ${className}`}>
            <Form
                data={defaultValue}
                structure={formStructure}
                onSubmitForm={onSubmitForm}
                formSize='sm'
                withCloseButton={true}
                schema={schema}
                isProcessing={isProcessing} />
        </div>
    );
}
