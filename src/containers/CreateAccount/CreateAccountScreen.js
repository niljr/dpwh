// @flow
import React from 'react';
import Typography from '../../components/base/Typography/Typography';
import Form from '../../components/base/Form/Form';
import schema from './createAccountSchema';
import formStructure from './createAccountForm';
import './create-account.scss';

type Props = {
    onSubmit: (data: Object) => {},
    isProcessing: boolean
}

export default function CreateAccountScreen({ onSubmit, isProcessing }: Props): React$Element<any> {
    return (
        <div className='create-account'>
            <div className='create-account__wrapper'>
                <Typography variant='size-26' className='mb-5 text-center'>
                    Create an Account
                </Typography>

                <Form
                    className='create-account__form'
                    formSize='lg'
                    isShowLabels={false}
                    structure={formStructure}
                    onSubmitForm={onSubmit}
                    schema={schema}
                    submitLabel='Submit'
                    isProcessing={isProcessing} />
            </div>
        </div>
    );
}
