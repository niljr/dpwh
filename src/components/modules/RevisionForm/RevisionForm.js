// @flow
import React from 'react';
import './revision-form.scss';

type Props = {
    className?: string
}

export default function RevisionForm({ className = '' }: Props): React$Element<any> {
    return (
        <div className={`revision-form ${className}`} >
            RevisionsForm
        </div>
    );
}
