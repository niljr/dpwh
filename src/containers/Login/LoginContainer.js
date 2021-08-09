// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Login from './LoginScreen';
import Storage from '../../utils/Storage';
import { isValidEmail } from '../../utils/helpers';
import { authUser } from '../../redux/modules/authentication';
import { setFlashNotification } from '../../redux/modules/flashNotification';
import { login } from '../../api/auth';
import { storageKey } from '../../config/constants';

export default function LoginContainer(): React$Element<any> {
    const dispatch = useDispatch();
    const history = useHistory();

    const [isProcessing, setIsProcessing] = useState(false);

    const onSubmit = async (formInput) => {
        setIsProcessing(true);

        try {
            const { data } = await login(formInput);

            Storage.setItem(storageKey.accessToken, data.token);
            dispatch(authUser(data));
            setIsProcessing(false);
            history.replace('/dashboard');
        } catch (err) {
            const { data } = err.response;

            dispatch(setFlashNotification({
                message: data.message,
                isError: true
            }));

            setIsProcessing(false);
        }
    };

    return <Login
        onSubmit={onSubmit}
        isProcessing={isProcessing} />;
}
