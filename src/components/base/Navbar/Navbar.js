// @flow
import React from 'react';
import { IoIosNotifications, IoMdArrowDropdown } from 'react-icons/io';
import Typography from '../Typography/Typography';
import './navbar.scss';

type Props = {
    className?: string
}

// const appName = process.env.REACT_APP_SITE_TITLE;

// NOTE: this is just a sample nav
// please update when needed

export default function Navbar({ className = '' }: Props): React$Element<any> {
    return (
        <div className={`navbar ${className}`} >
            <div className='navbar__left'>
                <Typography variant='size-12'>Welcome</Typography>
                <Typography variant='size-18' weight='bold'>Dingdong, Dantes</Typography>
                <Typography variant='size-12'>Iloilo 3rd district Engineering Office</Typography>
            </div>
            <div className='navbar__right'>
                <IoIosNotifications size={20} className='m-3' />
                <Typography variant='size-20'>Home</Typography>
                <IoMdArrowDropdown size={20}/>
            </div>

        </div>
    );
}
