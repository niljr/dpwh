// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { FaQuestionCircle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { clearModalContent } from '../../../redux/modules/modalEvent';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import './info-message.scss';

type Props = {
    className?: string,
    infoType?: 'confirm' | 'success' | 'error',
    message: string,
    onConfirm?: () => void
}

const COLORS = {
    confirm: '#60a9ca',
    success: '#65ad7b',
    error: '#d5746d'
};

export default function InfoMessage({ className = '', infoType = 'success', message, onConfirm }: Props): React$Element<any> {
    const dispatch = useDispatch();
    const Icon = infoType === 'success'
        ? FaCheckCircle
        : infoType === 'confirm'
            ? FaQuestionCircle
            : FaTimesCircle;

    const handleClose = () => {
        dispatch(clearModalContent());
    };

    const handleConfirm = () => {
        onConfirm && onConfirm();
        handleClose();
    };

    return (
        <div className={`info-message ${className}`} >
            <Icon color={COLORS[infoType]} size={100}/>

            <Typography variant='size-26' className='info-message__text'>{message}</Typography>

            <div>
                {infoType === 'confirm' && (
                    <Button
                        label='Cancel'
                        onClick={handleClose}
                        variant='outline-primary'
                        size='lg' />
                )}

                <Button
                    label={infoType === 'confirm' ? 'Confirm' : 'OK'}
                    onClick={handleConfirm}
                    size='lg'/>
            </div>
        </div>
    );
}
