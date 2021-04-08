// @flow
import React from 'react';
import CollapsibleSidebar from '../../components/base/CollapsibleSidebar/CollapsibleSidebarContainer';
import Typography from '../../components/base/Typography/Typography';
import Tabs from '../../components/base/Tabs/Tabs';
import './management.scss';

type Props = {
    // TODO add props here
}

export default function ManagementScreen(_: Props): React$Element<any> {
    return (
        <div className='management'>
            <div className='management__wrapper'>

                <div className='management__content'>
                    <Tabs />
                    <div className='management__content-main'>
                        <Typography>hello</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}
