// @flow
import React from 'react';
import * as yup from 'yup';
import Form from '../../base/Form/Form';
import formStructure from './addSuspensionOrderForm';
import './add-suspension-order.scss';

type Props = {
    className?: string
}

const schema = yup.object().shape({
    reason_of_suspension: yup.string().required('Reason of Suspension is Required'),
    suspension_effectivity_date: yup.string().required('Suspension Effectivity Date is Required'),
    extent: yup.string().required('Extent is Required'),
    status: yup.string().required('Status is Required'),
    approval_level: yup.string().required('Approval Level is Required'),
    cumulative_suspended_to_date: yup.string().required('Cumulative C.D Suspended to date is Required')
});

export default function AddSuspensionOrder({ className = '' }: Props): React$Element<any> {
    const onSubmitForm = (data) => {
        console.log(data);
    };

    return (
        <div className={`add-suspension-order ${className}`} >
            <Form
                onSubmitForm={onSubmitForm}
                structure={formStructure}
                schema={schema}
                formSize='sm'/>
        </div>
    );
}
