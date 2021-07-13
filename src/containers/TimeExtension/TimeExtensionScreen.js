// @flow
import React from 'react';
import { FaPrint, FaPlus } from 'react-icons/fa';
import SectionWithAction from '../../components/base/SectionWithAction/SectionWithAction';
import Button from '../../components/base/Button/Button';
import TableDetails from '../../components/base/TableDetails/TableDetails';
import withLoading from '../../components/modules/withLoading/withLoading';
import './time-extension.scss';

type Props = {
    data: Array<any>,
    handleToggleForm: (actionType: 'edit' | 'add', data: null | Object) => void
}

function TimeExtensionScreen({ data, handleToggleForm }: Props): React$Element<any> {
    return (
        <div className='time-extension'>
            <SectionWithAction
                label='Time Extension List'
                className='mt-2'
                rightElement={<div>
                    <Button
                        variant='outline-light'
                        label='Print Time Variance'
                        icon={FaPrint}
                        onClick={() => handleToggleForm('add')}
                        size='sm' />
                    <Button
                        variant='outline-light'
                        label='Add Time Extension'
                        className='ml-2'
                        icon={FaPlus}
                        onClick={() => handleToggleForm('add')}
                        size='sm' />
                </div>}/>

            <div className='time-extension__content'>
                <TableDetails
                    headers={[
                        'suspensionOrderNo', 'extent', 'description', 'approvalLevel', 'approvedBy', 'designation',
                        'reason', 'effectivityDate', 'dateApproved', 'cumulativeCD', 'status', 'continuance', 'resumption', 'edit']}
                    list={data}
                    className='pb-3'/>
            </div>
        </div>
    );
}

const TimeExtension: any = withLoading(TimeExtensionScreen);

export default TimeExtension;
