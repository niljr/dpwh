// @flow
import React from 'react';
import { IoIosNotifications, IoMdArrowDropdown } from 'react-icons/io';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import Typography from '../Typography/Typography';
import LOGO from '../../../assets/DPWH-logo.png';
import './navbar.scss';

type Props = {
    className?: string
}

// const appName = process.env.REACT_APP_SITE_TITLE;

// NOTE: this is just a sample nav
// please update when needed

export default function AppNavbar({ className = '' }: Props): React$Element<any> {
    return (
    // <Navbar className={`flex-spaced ${className}`} >
    //     <div className='flex-centered'>
    //         <img src={LOGO} alt='logo' className='navbar__logo'/>

    //         <div className='ml-2'>
    //             <Typography variant='size-12'>Welcome</Typography>
    //             <Typography variant='size-18' weight='bold'>Dingdong, Dantes</Typography>
    //             <Typography variant='size-12'>Iloilo 3rd district Engineering Office</Typography>
    //         </div>
    //     </div>

    //     <Nav>
    //         <div className='navbar__icon'>
    //             <IoIosNotifications size={20} className='m-3' />
    //         </div>
    //         <NavDropdown title='Home'>
    //             <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
    //             <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
    //             <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
    //         </NavDropdown>
    //     </Nav>
    // </Navbar>

        <Navbar expand='lg'>
            <Navbar.Brand href='#home' className='flex-centered'>
                <img src={LOGO} alt='logo' className='navbar__logo'/>

                <div className='ml-2'>
                    <Typography variant='size-12'>Welcome</Typography>
                    <Typography variant='size-18' weight='bold'>Dingdong, Dantes</Typography>
                    <Typography variant='size-12'>Iloilo 3rd district Engineering Office</Typography>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <div className='navbar__toggle mr-2'>
                        <IoIosNotifications size={20}/>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
                            <Typography>
                                Home <IoMdArrowDropdown size={20}/>
                            </Typography>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align='right'>
                            <Dropdown.Item eventKey='1'>Red</Dropdown.Item>
                            <Dropdown.Item eventKey='2'>Blue</Dropdown.Item>
                            <Dropdown.Item eventKey='1'>Red-Orange</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div ref={ref} onClick={onClick} className='navbar__toggle'>
        {children}
    </div>
));
