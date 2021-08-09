// @flow
import React from 'react';
import { FaSortDown } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import Typography from '../Typography/Typography';
import CustomToggle from '../CustomToggle';
import './tabs.scss';
import { setFlashNotification } from '../../../redux/modules/flashNotification';

type Props = {
    className?: string,
    items: Array<Object>,
    isMainTabs?: boolean
}

export default function Tabs({ className = '', items, isMainTabs }: Props): React$Element<any> {
    const history = useHistory();
    const dispatch = useDispatch();
    const { currentContract } = useSelector(({ contract }) => contract);
    const { pathname } = useLocation();

    const isTabDisabled = !currentContract;

    const goToRoute = (route) => {
        history.push(route);
    };

    const handleSelectTab = (key, route) => {
        if (route) {
            goToRoute(route);
        }
    };

    const handleNoCurrentContract = () => {
        const el = document.getElementById('searchId');

        el.focus();

        dispatch(setFlashNotification({
            message: 'Please search a contract first',
            isError: true
        }));
    };

    return (
        <div className={`tabs ${className}${isMainTabs ? ' -isMainTabs' : ''}`} >
            {items.map(tab =>
                <div className='tabs__wrapper' key={tab.key}>
                    {tab.subMenu
                        ? <Dropdown key={tab.key}>
                            <Dropdown.Toggle as={CustomToggle} disabled={isTabDisabled} >
                                <div
                                    onClick={() => isTabDisabled ? handleNoCurrentContract() : handleSelectTab(tab.key, tab.route)}
                                    className={`tabs__item${pathname.includes(tab.key) ? ' active' : ''}${tab.subMenu ? ' -with-submenu' : ''}`}>
                                    {tab.icon && <tab.icon size={22}/>}
                                    <Typography
                                        variant='size-14'
                                        weight='semi-bold'
                                        className={`tabs__item-label ${tab.icon ? '-withIcon' : ''}`}>
                                        {tab.label}
                                    </Typography>
                                    <FaSortDown className='mb-1 ml-2' />
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu align='right'>
                                {tab.subMenu.map(item =>
                                    <Dropdown.Item
                                        key={item.route}
                                        active={item.route === pathname}
                                        onClick={() => isTabDisabled ? handleNoCurrentContract() : goToRoute(item.route)}>
                                        {item.label}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        : <div
                            key={tab.key}
                            className={`tabs__item${pathname.includes(tab.key) ? ' active' : ''}${tab.subMenu ? ' -with-submenu' : ''}`}
                            onClick={() => isTabDisabled ? handleNoCurrentContract() : handleSelectTab(tab.key, tab.route)}
                            disabled={isTabDisabled}>
                            {tab.icon && <tab.icon size={22}/>}
                            <Typography
                                variant='size-14'
                                weight='semi-bold'
                                className={`tabs__item-label ${tab.icon ? '-withIcon' : ''}`}>
                                {tab.label}
                            </Typography>
                        </div>
                    }
                </div>
            )}
        </div>
    );
}
