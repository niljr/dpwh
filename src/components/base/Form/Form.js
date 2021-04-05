// @flow
import React from 'react';
import './form.scss';

type Props = {
    className?: string
}

// TODO:
export default function Form({ className = '' }: Props): React$Element<any> {
    return (
        <Form className={`form ${className}`} >
            Form
        </Form>
    );
}
