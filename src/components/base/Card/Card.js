// @flow
import * as React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import './card.scss';

type Props = {
    className?: string,
    header?: string | React.Node,
    children: string | React.Node,
    footer?: string | React.Node
}

export default function Card({ className = '', header, children, footer }: Props): React$Element<any> {
    return (
        <BootstrapCard className={className}>
            {header && (
                <BootstrapCard.Header>
                    {header}
                </BootstrapCard.Header>
            )}

            {children}

            {footer && (
                <BootstrapCard.Footer>
                    {footer}
                </BootstrapCard.Footer>
            )}
        </BootstrapCard>
    );
}
