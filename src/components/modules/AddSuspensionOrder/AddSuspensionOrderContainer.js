// @flow
import React from 'react';
import AddSuspensionOrder from './AddSuspensionOrder';

type Props = {
    className?: string
}

export default function AddSuspensionOrderContainer({ className = '' }: Props): React$Element<any> {
    return (
        <AddSuspensionOrder className={className} />
    );
}
