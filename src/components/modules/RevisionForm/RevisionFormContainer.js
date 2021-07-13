// @flow
import React from 'react';
import formStructure from './revisionForm';
import Form from '../../base/Form/Form';

type Props = {
    className?: string
}

export default function RevisionFormContainer({ className = '' }: Props): React$Element<any> {
    const defaultValue = {
        revision_number: '',
        date_entry: new Date(),
        date_approved: '',
        reason_revision: 1,
        status: 1
    };

    const onSubmitForm = (data) => {
        console.log(data);
    };

    return (
        <div className={`add-revision ${className}`}>
            <Form
                data={defaultValue}
                structure={formStructure}
                onSubmitForm={onSubmitForm}
                formSize='sm'
                withCloseButton={true}/>
        </div>
    );
}
