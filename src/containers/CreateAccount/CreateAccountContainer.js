// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import InfoMessage from '../../components/base/InfoMessage/InfoMessage';
import CreateAccountScreen from './CreateAccountScreen';
import { isValidEmail } from '../../utils/helpers';
import { authUser } from '../../redux/modules/authentication';
import { setFlashNotification } from '../../redux/modules/flashNotification';
import { createUser } from '../../api/users';
import { setModalContent } from '../../redux/modules/modalEvent';

export default function CreateAccountContainer(): React$Element<any> {
    const dispatch = useDispatch();
    const history = useHistory();

    const [isProcessing, setIsProcessing] = useState(false);

    const goToLogin = () => {
        history.push('/login');
    };

    const onSubmit = async (data: Object) => {
        setIsProcessing(true);

        try {
            await createUser({ ...data });

            setIsProcessing(false);

            dispatch(setModalContent({
                modalContent: <InfoMessage
                    infoType='success'
                    message='Successfully create an account. You can now proceed to login.'
                    onConfirm={goToLogin} />
            }));
        } catch (err) {
            const { data } = err.response;

            dispatch(setFlashNotification({
                message: data.message,
                isError: true
            }));

            setIsProcessing(false);
        }
    };

    return <CreateAccountScreen
        onSubmit={onSubmit}
        isProcessing={isProcessing} />;
}
