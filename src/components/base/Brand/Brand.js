// @flow
import React from 'react';
import { Navbar } from 'react-bootstrap';
import LOGO from '../../../assets/DPWH-logo.png';
import Typography from '../Typography/Typography';
import './brand.scss';

type Props = {
    className?: string
}

export default function Brand({ className = '' }: Props): React$Element<any> {
    return (
        <Navbar.Brand href='/dashboard' className='brand'>
            <img src={LOGO} alt='logo' className='brand__logo'/>

            <div>
                <Typography variant='size-12'>Welcome</Typography>
                <Typography variant='size-18' weight='bold'>Dingdong, Dantes</Typography>
                <Typography variant='size-12'>Iloilo 3rd district Engineering Office</Typography>
            </div>
        </Navbar.Brand>
    );
}
