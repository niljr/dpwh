// @flow
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import type { ButtonVariant } from '../../../types';
import './button.scss';

type Props = {
    variant?: ButtonVariant,
    label?: string,
    className?: string,
    onClick?: Function,
    children?: React.Node,
    icon?: any,
    isProcessing?: boolean
}

export default function AppButton({ children, variant, label, className = '', onClick, icon: Icon, isProcessing, ...rest }: Props): React$Element<any> {
    return (
        <Button
            {...rest}
            variant={variant || 'primary'}
            className={`button ${className}`}
            onClick={onClick || null}>
            {isProcessing && (
                <Spinner
                    animation='border'
                    role='status'
                    variant={/light|link/.test(variant || '') ? 'dark' : 'light'}
                    className='button__spinner'
                    size='sm'/>
            )}
            {Icon && (
                <Icon className='mr-2'/>
            )}
            {label}
            {children}
        </Button>
    );
}
