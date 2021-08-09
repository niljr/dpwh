// @flow
import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from '../App/AppContainer';
import Tabs from '../../components/base/Tabs/Tabs';
import SectionWithAction from '../../components/base/SectionWithAction/SectionWithAction';
import withLoading from '../../components/modules/withLoading/withLoading';
import './construction-schedule.scss';

type Props = {
    routes: Array<Object>
}

const tabItems = [
    { label: 'Approved Construction Schedule', key: 'approved', route: '/contract-management/construction-schedule/approved' },
    { label: 'Revised Construction Schedule', key: 'revised', route: '/contract-management/construction-schedule/revised' }
];

function ConstructionScheduleScreen({ routes }: Props): React$Element<any> {
    return (
        <div className='construction-schedule'>
            <SectionWithAction label='Construction Schedule' className='mt-2'/>

            <div className='m-3'>
                <Tabs items={tabItems} />

                <div className='construction-schedule__content'>
                    <Switch>
                        {routes.map((route, i) =>
                            <RouteWithSubRoutes key={i} {...route} />
                        )}
                    </Switch>
                </div>
            </div>
        </div>
    );
}

const ConstructionSchedule: any = withLoading(ConstructionScheduleScreen);

export default ConstructionSchedule;
