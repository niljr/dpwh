// @flow
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import type { ButtonVariant } from '../../../types';
import './button.scss';

type Props = {
    variant?: ButtonVariant,
    label?: string,
    className?: string,
    onClick?: Function,
    children?: React.Node,
    icon?: any
}

export default function AppButton({ children, variant, label, className = '', onClick, icon: Icon, ...rest }: Props): React$Element<any> {
    return (
        <Button
            {...rest}
            variant={variant || 'primary'}
            className={`button ${className}`}
            onClick={onClick || null}>
            {Icon && (
                <Icon className='mr-2'/>
            )}
            {label}
            {children}
        </Button>
    );
}
