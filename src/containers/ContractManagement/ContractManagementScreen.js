// @flow
import React from 'react';
import Typography from '../../components/base/Typography/Typography';
import Tabs from '../../components/base/Tabs/Tabs';
import './contract-management.scss';

type Props = {
    // TODO add props here
}

export default function ManagementScreen(_: Props): React$Element<any> {
    return (
        <div className='contract-management'>
            <Tabs />
            <div className='contract-management__content'>
                <Typography>hello</Typography>
            </div>
        </div>
    );
}
