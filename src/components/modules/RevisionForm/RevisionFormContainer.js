// @flow
import React from 'react';
import RevisionForm from './RevisionForm';

type Props = {
    className?: string
}

export default function RevisionFormContainer({ className = '' }: Props): React$Element<any> {
    return (
        <RevisionForm className={className} />
    );
}
