// @flow
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import TableDetails from '../../components/base/TableDetails/TableDetails';
import SectionWithAction from '../../components/base/SectionWithAction/SectionWithAction';
import './construction-schedule-approved.scss';

type Props = {
    // TODO add props here
}

export default function ConstructionScheduleApprovedScreen(_: Props): React$Element<any> {
    return (
        <div className='construction-schedule-approved'>
            <SectionWithAction
                label='Revisions'
                className='mt-2'
                onButtonClick={() => {}}
                buttonLabel='ADD REVISIONS'
                buttonIcon={FaPlus} />
            <TableDetails
                headers={[
                    'suspensionOrderNo', 'extent', 'description']}
                list={[]}
                className='pb-3'/>
        </div>
    );
}
