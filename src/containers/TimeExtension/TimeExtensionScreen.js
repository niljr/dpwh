// @flow
import React from 'react';
import { FaPrint } from 'react-icons/fa';
import SectionWithAction from '../../components/base/SectionWithAction/SectionWithAction';
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
                buttonLabel='Print Time Variance'
                buttonIcon={FaPrint}
                onButtonClick={() => handleToggleForm('add')}/>

            <div className='mx-3 mb-3'>
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
