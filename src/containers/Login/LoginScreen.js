// @flow
import React from 'react';
import './login.scss';
import Form from '../../components/base/Form/Form';
import Typography from '../../components/base/Typography/Typography';
import LOGO from '../../assets/DPWH-logo.png';
import formStructure from './loginForm';
import schema from './loginSchema';

type Props = {
    onSubmit: Function,
    onChange: Function,
    isProcessing: boolean
}

export default function Login({ onSubmit, onChange, isProcessing }:Props): React$Element<any> {
    return (
        <div className='login'>
            <div className='login__wrapper'>
                <div className='login__image' />
            </div>

            <div className='login__wrapper'>

                <div className='login__form'>
                    <img src={LOGO} alt='logo' />

                    <Typography
                        variant='size-26' color='color-dark' weight='bold'
                        className='text-center mt-3 mb-5'>
                        DPWH Engineering District
                    </Typography>

                    <Form
                        isShowLabels={false}
                        structure={formStructure}
                        onSubmitForm={onSubmit}
                        schema={schema}
                        submitLabel='Login'
                        isProcessing={isProcessing} />
                </div>
            </div>
        </div>
    );
}
