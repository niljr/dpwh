// @flow
import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from '../App/AppContainer';
import Tabs from '../../components/base/Tabs/Tabs';
import './contract-management.scss';
import Typography from '../../components/base/Typography/Typography';

type Props = {
    routes: Array<any>,
    isParentRoute: boolean
}

export default function ManagementScreen({ routes, isParentRoute }: Props): React$Element<any> {
    return (
        <div className='contract-management'>
            <Tabs />

            <div className='contract-management__content'>
                {isParentRoute && (
                    <div className='contract-management__content-main'>
                        <Typography variant='size-16' weight='semi-bold'>
                            Contract Management
                        </Typography>
                    </div>
                )}

                <Switch>
                    {routes.map((route, i) =>
                        <RouteWithSubRoutes key={i} {...route} />
                    )}
                </Switch>
            </div>
        </div>
    );
}
