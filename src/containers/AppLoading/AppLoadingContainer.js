// @flow

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import Spinner from 'react-bootstrap/Spinner';
import { useLocation, useHistory } from 'react-router-dom';

import WrapperBackground from '../../components/base/WrapperBackground/WrapperBackground';
import Typography from '../../components/base/Typography/Typography';
import Storage from '../../utils/Storage';
import { isTokenValid } from '../../utils/Auth';
import { storageKey } from '../../config/constants';
import { updateUserToken, authUser } from '../../redux/modules/authentication';
import { getUser } from '../../api/users';
import './app-loading.scss';

type Props = {
    children: any,
    route: string,
}

export default function AppLoadingContainer({
    children,
    ...props
}: Props): any | React$Element<"div"> {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { pathname } = location;

    const { isAuthed } = useSelector(({ authentication }) => authentication);

    const [isAppReady, setAppReady] = useState(false);
    const [isErrorLoaded, setErrorLoaded] = useState(false);

    useEffect(() => {
        checkAuth();
    }, []);

    useEffect(() => {
        if (isAppReady) {
            history.replace(!isAuthed ? '/login' : '/dashboard');
        }
    }, [isAuthed]);

    useEffect(() => {
        if (pathname === '/') {
            history.replace('/login');
        }
    }, [pathname]);

    const checkAuth = async () => {
        try {
            setErrorLoaded(false);

            const shouldLoggout = /\/login|\/create-account|\/forgot-password/.test(location.pathname); // Add other unauthenticated routes here
            const accessToken = Storage.getItem(storageKey.accessToken);
            const token: Object = shouldLoggout ? null : accessToken || null;

            if (token) {
                const decoded = jwt_decode(token);
                const data = await getUser(decoded.id);

                dispatch(authUser({
                    ...data
                }));
            }

            setAppReady(true);
        } catch (err) {
            setAppReady(true);
            setErrorLoaded(true);
        }
    };

    if (isAppReady) {
        return isErrorLoaded
            ? <WrapperBackground>
                <div className='app-loading__error'>
                    <Typography>Page error</Typography>
                </div>
            </WrapperBackground>
            : children;
    }

    return (
        <WrapperBackground className='app-loading'>
            <Spinner animation='border' role='status'>
                <span className='sr-only'>Loading...</span>
            </Spinner>
        </WrapperBackground>
    );
}
