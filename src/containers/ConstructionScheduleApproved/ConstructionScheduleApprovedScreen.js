// @flow
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import TableDetails from '../../components/base/TableDetails/TableDetails';
import SectionWithAction from '../../components/base/SectionWithAction/SectionWithAction';
import './construction-schedule-approved.scss';

type Props = {
    handleToggleRevisionForm: () => void,
    revisions: Array<any>
}

export default function ConstructionScheduleApprovedScreen({ handleToggleRevisionForm, revisions }: Props): React$Element<any> {
    return (
        <div className='construction-schedule-approved'>
            <SectionWithAction
                label='Revisions'
                className='mt-2'
                onButtonClick={() => handleToggleRevisionForm()}
                buttonLabel='ADD REVISION'
                buttonIcon={FaPlus} />

            <div className='construction-schedule-approved__content'>
                <TableDetails
                    headers={[
                        { key: 'revisionNumber', label: 'Revision #' },
                        { key: 'dateEntry', label: 'Date of Entry' },
                        { key: 'dateApproved', label: 'Date Approved' },
                        { key: 'reasonForRevision', label: 'Reason' },
                        { key: 'status', label: 'Status' },
                        { key: 'edit', label: 'Edit' }
                    ]}
                    list={revisions}
                    className='pb-3'/>
            </div>
        </div>
    );
}
