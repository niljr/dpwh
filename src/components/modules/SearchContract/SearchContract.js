// @flow
import React from 'react';
import Card from '../../base/Card/Card';
import Typography from '../../base/Typography/Typography';
import './search-contract.scss';

type Props = {
}

export default function SearchContract(_: Props): React$Element<any> {
    return (
        <Card className='search-contract' header={<Typography color='color-3'>Search</Typography>}>
            hello
        </Card>
    );
}
