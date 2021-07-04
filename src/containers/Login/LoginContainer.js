// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Login from './LoginScreen';
import { isValidEmail } from '../../utils/helpers';
import { authUser } from '../../redux/modules/authentication';
import { setFlashNotification } from '../../redux/modules/flashNotification';

export default function LoginContainer(): React$Element<any> {
    const dispatch = useDispatch();
    const history = useHistory();

    const [isProcessing, setIsProcessing] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const onSubmit = (data) => {
        console.log('submit', data);
        setIsProcessing(true);

        try {
            // TODO:
            // call api to authenticate user and redirect to dashboard

            setTimeout(() => {
                setIsProcessing(false);
                history.replace('/dashboard');
                dispatch(authUser(data));
            }, 500);
        } catch (err) {
            dispatch(setFlashNotification({
                message: 'ERROR',
                isError: true
            }));
        }
    };

    const onChange = e => {
        const { name, value } = e.target;

        setLoginForm({
            ...loginForm,
            [name]: value
        });
    };

    return <Login
        onSubmit={onSubmit}
        onChange={onChange}
        isProcessing={isProcessing} />;
}
