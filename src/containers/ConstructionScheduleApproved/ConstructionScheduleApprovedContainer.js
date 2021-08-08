// @flow
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaRegEdit } from 'react-icons/fa';
import { setModalContent } from '../../redux/modules/modalEvent';
import Button from '../../components/base/Button/Button';
import RevisionForm from '../../components/modules/RevisionForm/RevisionFormContainer';
import ConstructionScheduleApprovedScreen from './ConstructionScheduleApprovedScreen';
import { setFlashNotification } from '../../redux/modules/flashNotification';
import { getAllRevisions } from '../../api/revisions';

export default function ConstructionScheduleApprovedContainer(): React$Element<any> {
    const dispatch = useDispatch();
    const [revisions, setRevisions] = useState([]);

    useEffect(() => {
        prepareData();
    }, []);

    const prepareData = async () => {
        try {
            const data = await getAllRevisions();

            setRevisions(data.map(item => ({
                ...item,
                edit: <Button variant='link' onClick={() => handleEdit(item)}>
                    <FaRegEdit />
                </Button>
            })));
        } catch (error) {
            dispatch(setFlashNotification({
                message: 'Failed to retrieve revisions',
                isError: true
            }));
        }
    };

    const handleUpdatedRevision = (revision, isUpdating) => {
        if (isUpdating) {
            prepareData();
        } else {
            setRevisions([...revisions, revision]);
        }
    };

    const handleEdit = (item: any) => {
        handleToggleRevisionForm(item);
    };

    const handleToggleRevisionForm = (item: any = {}) => {
        dispatch(setModalContent({
            modalContent: <RevisionForm
                count={revisions.length}
                handleUpdatedRevision={handleUpdatedRevision}
                revision={item} />,
            title: `${item ? 'Edit ' : ''}Revision`
        }));
    };

    return (
        <ConstructionScheduleApprovedScreen
            handleToggleRevisionForm={handleToggleRevisionForm}
            revisions={revisions}/>
    );
}
