// @flow
import React from 'react';
import './contract-information.scss';

type Props = {
    className?: string
}

export default function ContractInformation({ className = '' }: Props): React$Element<any> {
    return (
        <div className={`contract-information ${className}`} >
            ContractInformation
        </div>
    );
}
