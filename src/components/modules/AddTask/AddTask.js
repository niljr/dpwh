// @flow
import React from 'react';
import * as yup from 'yup';
import Form from '../../base/Form/Form';
import formStructure from './addTaskForm';
import './add-task.scss';

type Props = {
    className?: string
}

const schema = yup.object().shape({
    project_engineer: yup.string().required('Project engineer is required'),
    effectivity_date: yup.date().required('Effectivity date is required'),
    expiry_date: yup.date().required('Expiry date is required'),
    project_id: yup.string(),
    contractor_name: yup.string(),
    component_id: yup.string(),
    cost: yup.number('Invalid number').min(1, 'Cost should be greater than 1').required('Cost is required'),
    type_of_project: yup.string(),
    contract_name: yup.string().required('Contract name is required.'),
    duration: yup.number('Invalid number').required('Duration is required'),
    municipality: yup.string()
});

export default function AddTask({ className = '' }: Props): React$Element<any> {
    const defaultValue = {
        cost: 0,
        duration: 0
    };

    const onSubmitForm = (data) => {
        console.log(data);
        // const { effectivity_date, expiry_date } = data;

        // if (effectivity_date && expiry_date) {

        // }
        // console.log('error', errors);
    };

    return (
        <div className={`add-task ${className}`} >
            <Form
                data={defaultValue}
                structure={formStructure}
                onSubmitForm={onSubmitForm}
                schema={schema}
                formSize='sm' />
        </div>
    );
}
