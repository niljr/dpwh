// @flow
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import TableDetails from '../../components/base/TableDetails/TableDetails';
import SectionWithAction from '../../components/base/SectionWithAction/SectionWithAction';
import './construction-schedule-approved.scss';

type Props = {
    handleAddRevision: () => void
}

export default function ConstructionScheduleApprovedScreen({ handleAddRevision }: Props): React$Element<any> {
    return (
        <div className='construction-schedule-approved'>
            <SectionWithAction
                label='Revisions'
                className='mt-2'
                onButtonClick={handleAddRevision}
                buttonLabel='ADD REVISION'
                buttonIcon={FaPlus} />
            <TableDetails
                headers={[
                    'suspensionOrderNo', 'extent', 'description']}
                list={[]}
                className='pb-3'/>
        </div>
    );
}
