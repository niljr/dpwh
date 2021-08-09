// @flow
import React from 'react';
import * as yup from 'yup';
import Form from '../../base/Form/Form';
import formStructure from './addTimeExtensionForm';
import './add-time-extension.scss';

type Props = {
    className?: string
}

const schema = yup.object().shape({
    approval_level: yup.string().required('Approval level is required').nullable(),
    reason_for_extension: yup.string().test({
        name: 'reason_for_extension',
        message: 'Reason for Time Extension is required',
        test: (value) => value !== null
    }).nullable(),
    approved_by: yup.string().nullable(),
    designation: yup.string().nullable(),
    date_approved: yup.string(),
    duration: yup.number(),
    additional_duration: yup.number('Invalid number').typeError('Invalid number'),
    status: yup.string().test({
        name: 'status',
        message: 'Status is required',
        test: (value) => value !== null
    }).nullable(),
    with_suspension_order: yup.string()
});

export default function AddTimeExtension({ className = '' }: Props): React$Element<any> {
    const defaultValue = {
        duration: 60,
        additional_duration: 0
    };

    const onSubmitForm = (data) => {
        // TODO call api
        console.log(data);
    };

    return (
        <div className={`add-time-extension ${className}`} >
            <Form
                data={defaultValue}
                structure={formStructure}
                onSubmitForm={onSubmitForm}
                schema={schema}
                formSize='sm'
                withCloseButton={true} />
        </div>
    );
}
