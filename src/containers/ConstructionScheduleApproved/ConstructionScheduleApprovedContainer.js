// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalContent } from '../../redux/modules/modalEvent';
import RevisionForm from '../../components/modules/RevisionForm/RevisionFormContainer';
import ConstructionScheduleApprovedScreen from './ConstructionScheduleApprovedScreen';

export default function ConstructionScheduleApprovedContainer(): React$Element<any> {
    const dispatch = useDispatch();

    const handleAddRevision = () => {
        dispatch(setModalContent({
            modalContent: <RevisionForm />,
            title: 'Login'
        }));
    };

    return (
        <ConstructionScheduleApprovedScreen handleAddRevision={handleAddRevision}/>
    );
}
