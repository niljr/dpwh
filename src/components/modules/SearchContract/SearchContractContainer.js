// @flow
import React from 'react';
import SearchContract from './SearchContract';

type Props = {
    className?: string
}

export default function SearchContractContainer({ className = '' }: Props): React$Element<any> {
    return (
        <SearchContract className={className} />
    );
}
