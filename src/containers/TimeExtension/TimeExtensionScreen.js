// @flow
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import SectionWithAction from '../../components/base/SectionWithAction/SectionWithAction';
import Button from '../../components/base/Button/Button';
import TableDetails from '../../components/base/TableDetails/TableDetails';
import withLoading from '../../components/modules/withLoading/withLoading';
import './time-extension.scss';

type Props = {
    data: Array<any>,
    handleToggleForm: () => void
}

function TimeExtensionScreen({ data, handleToggleForm }: Props): React$Element<any> {
    return (
        <div className='time-extension'>
            <SectionWithAction
                label='Time Extension List'
                className='mt-2'
                rightElement={<div>
                    {/* <Button
                        variant='outline-light'
                        label='Print Time Variance'
                        icon={FaPrint}
                        onClick={() => handleToggleForm('add')}
                        size='sm' /> */}
                    <Button
                        variant='outline-light'
                        label='Add Time Extension'
                        className='ml-2'
                        icon={FaPlus}
                        onClick={() => handleToggleForm()}
                        size='sm' />
                </div>}/>

            <div className='time-extension__content'>
                <TableDetails
                    headers={[
                        { key: 'timeExtensionNumber', label: 'Time Extension No.' },
                        { key: 'approvalLevel', label: 'Approval Level' },
                        { key: 'approvedBy', label: 'Approved By' },
                        { key: 'designation', label: 'Designation' },
                        { key: 'dateApproved', label: 'Date Approved' },
                        { key: 'additionalDuration', label: 'Additional Duration (CDs)' },
                        { key: 'reasonForTimeExtension', label: 'Reason' },
                        { key: 'duration', label: 'Duration (CDs)' },
                        { key: 'status', label: 'Status' },
                        { key: 'edit', label: 'Edit' }]}
                    list={data}
                    className='pb-3'/>
            </div>
        </div>
    );
}

const TimeExtension: any = withLoading(TimeExtensionScreen);

export default TimeExtension;
