// @flow
import React, { useEffect, useState } from 'react';
import { IoIosNotifications, IoMdArrowDropdown } from 'react-icons/io';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import Typography from '../Typography/Typography';
import Brand from '../Brand/Brand';
import CustomToggle from '../CustomToggle';
import './navbar.scss';

type Props = {
    className?: string
}

type Menu = {label: string | null, route: string | null, isDivider: null | boolean};

export default function AppNavbar({ className = '' }: Props): React$Element<any> {
    const menu: Array<Menu> = [{
        label: 'Home',
        route: '/dashboard',
        isDivider: false
    }, {
        label: 'Contract Management',
        route: '/contract-management',
        isDivider: false
    }, {
        isDivider: true,
        label: null,
        route: null
    }, {
        label: 'Sign Out',
        route: '/login',
        isDivider: false
    }];

    const history = useHistory();
    const { pathname } = useLocation();

    const isDashboard = pathname === '/dashboard';

    const getCurrentMenu = ():Menu | void => menu.find(m => pathname.includes(m.route));

    const [currentMenu, setCurrentMenu] = useState<Menu | void>(getCurrentMenu());

    useEffect(() => {
        setCurrentMenu(getCurrentMenu());
    }, [pathname]);

    const handleOnClick = (route) => {
        history.push(route);
    };

    return (
        <Navbar expand='lg' className={isDashboard ? '' : 'colored'}>
            {isDashboard && <Brand />}
            <Nav className='ml-auto'>
                <div className='navbar__toggle mr-2'>
                    <IoIosNotifications size={20} color={isDashboard ? '#464646' : '#fff'}/>
                </div>
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components' className='navbar__toggle'>
                        <Typography color={isDashboard ? 'color-2' : 'color-3'}>
                            {currentMenu?.label} <IoMdArrowDropdown size={20}/>
                        </Typography>
                    </Dropdown.Toggle>

                    <Dropdown.Menu align='right'>
                        {menu.filter(m => m.label !== currentMenu?.label).map(item =>
                            item.isDivider
                                ? <Dropdown.Divider key={item.route}/>
                                : <Dropdown.Item onClick={() => handleOnClick(item.route)} key={item.route}>{item.label}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Navbar>
    );
}
