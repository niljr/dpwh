// @flow
import React, { useEffect, useState } from 'react';
import { IoIosNotifications, IoMdArrowDropdown } from 'react-icons/io';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModalContent } from '../../../redux/modules/modalEvent';
import Typography from '../Typography/Typography';
import Brand from '../Brand/Brand';
import AddTask from '../../modules/AddTask/AddTask';
import CustomToggle from '../CustomToggle';
import './navbar.scss';

type Props = {
    className?: string
}

type Menu = {label: string | null, route?: string, component?: any | null, isDivider: null | boolean};

export default function AppNavbar({ className = '' }: Props): React$Element<any> {
    const dispatch = useDispatch();

    const menu: Array<Menu> = [{
        label: 'Home',
        route: '/dashboard',
        isDivider: false
    }, {
        label: 'Add Task',
        component: AddTask,
        isDivider: false
    }, {
        label: 'Contract Management',
        route: '/contract-management',
        isDivider: false
    }, {
        isDivider: true,
        label: null
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

    const handleOnClick = (item) => {
        if (item.route) {
            history.push(item.route);
        } else {
            const Component: any = item.component;

            dispatch(setModalContent({
                modalContent: <Component />,
                title: 'Add Task',
                size: 'lg'
            }));
        }
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
                        <Typography color={isDashboard ? 'color-dark' : 'color-light'}>
                            {currentMenu?.label} <IoMdArrowDropdown size={20}/>
                        </Typography>
                    </Dropdown.Toggle>

                    <Dropdown.Menu align='right'>
                        {menu.filter(m => m.label !== currentMenu?.label).map(item =>
                            item.isDivider
                                ? <Dropdown.Divider key={item.route}/>
                                : <Dropdown.Item onClick={() => handleOnClick(item)} key={item.route}>{item.label}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Navbar>
    );
}
