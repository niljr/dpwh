// @flow
import React from 'react';
import './login.scss';
import Form from 'react-bootstrap/Form';
import Button from '../../components/base/Button/Button';
import Typography from '../../components/base/Typography/Typography';
import LOGO from '../../assets/DPWH-logo.png';

type Props = {
    onSubmit: Function,
    onChange: Function
}

export default function Login({ onSubmit, onChange }:Props): React$Element<any> {
    return (
        <div className='login'>
            <div className='login__wrapper'>
                <div className='login__image' />
            </div>

            <div className='login__wrapper'>

                <div className='login__form'>
                    <img src={LOGO} alt='logo' />

                    <Typography
                        variant='size-26' color='color-2' weight='bold'
                        className='text-center mt-3 mb-5'>
                        DPWH Engineering District
                    </Typography>
                    <Form onSubmit={onSubmit}>
                        <input className='form-control mt-4' placeholder='Email' type='email'
                            required={true} onChange={onChange} name='email'/>
                        <input className='form-control mt-4' placeholder='Password' type='password'
                            required={true} onChange={onChange} name='password'/>
                        <Button label='Login' type='submit' className='mt-4 px-4 w-100 d-block' />
                    </Form>
                </div>
            </div>
        </div>
    );
}
