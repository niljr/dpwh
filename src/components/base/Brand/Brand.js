// @flow
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import LOGO from '../../../assets/DPWH-logo.png';
import Typography from '../Typography/Typography';
import './brand.scss';

type Props = {
    className?: string
}

export default function Brand({ className = '' }: Props): React$Element<any> {
    const { profileData } = useSelector(({ authentication }) => authentication);

    return (
        <Navbar.Brand href='/dashboard' className={`brand ${className}`}>
            <img src={LOGO} alt='logo' className='brand__logo'/>

            <div>
                <Typography variant='size-12'>Welcome</Typography>
                <Typography variant='size-18' weight='bold'>{profileData.name || profileData.email}</Typography>
                <Typography variant='size-12'>Iloilo 3rd district Engineering Office</Typography>
            </div>
        </Navbar.Brand>
    );
}
