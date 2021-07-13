import * as React from 'react';
import type { ModalSize } from '../../types';

const SET_ASSIGNMENTS = 'SET_ASSIGNMENTS';
const CLEAR_ASSIGNMENTS = 'CLEAR_ASSIGNMENTS';

type Props = {
    title?: string,
    modalContent: string | React.Node,
    onToggle?: Function,
    className?: string,
    size?: ModalSize,
}

export function setModalContent({ ...props }: Props) {
    return {
        type: SET_ASSIGNMENTS,
        ...props
    };
}

export function clearModalContent() {
    return {
        type: CLEAR_ASSIGNMENTS
    };
}

const initialState = {
    title: null,
    modalContent: null,
    className: '',
    size: 'md',
    onToggle: null
};

export default function modalEvent(state: Object = initialState, action: Object): any {
    switch (action.type) {
        case SET_MODAL_CONTENT:
            return {
                ...state,
                ...action
            };
        case CLEAR_MODAL_CONTENT:
            return {
                ...state,
                ...initialState
            };
        default:
            return state;
    }
}
