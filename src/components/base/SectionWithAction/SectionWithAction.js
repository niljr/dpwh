// @flow
import * as React from 'react';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import './section-with-action.scss';

type Props = {
    className?: string,
    label: string,
    buttonLabel?: string,
    buttonIcon?: React.Node,
    onButtonClick?: () => void,
    rightElement?: React.Node
}

export default function SectionWithAction({ className = '', label, buttonLabel, buttonIcon, onButtonClick, rightElement }: Props): React$Element<any> {
    return (
        <div className={`section-with-action ${className}`} >
            <Typography variant='size-16' weight='semi-bold' className='ml-2'>
                {label}
            </Typography>

            {buttonLabel
                ? <Button
                    variant='outline-light'
                    label={buttonLabel}
                    icon={buttonIcon}
                    onClick={onButtonClick}
                    size='sm' />
                : null
            }

            {rightElement}
        </div>
    );
}
