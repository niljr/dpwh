// @flow
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import SectionWithAction from '../../components/base/SectionWithAction/SectionWithAction';
import TableDetails from '../../components/base/TableDetails/TableDetails';
import withLoading from '../../components/modules/withLoading/withLoading';

import './suspension-resumption.scss';

type Props = {
    data: Array<any>,
    handleOnClick: () => void
}

function SuspensionResumptionScreen({ data, handleOnClick }: Props): React$Element<any> {
    return (
        <div className='suspension-resumption'>
            <SectionWithAction
                label='Suspension / Resumption'
                buttonLabel= 'Add Work Suspension Order'
                className='mt-2'
                buttonIcon={FaPlus}
                onButtonClick={() => handleOnClick()} />

            <div className='suspension-resumption__content'>
                <TableDetails
                    headers={[
                        { key: 'orderNo', label: 'Suspension Order #' },
                        { key: 'extent', label: 'Extent' },
                        { key: 'description', label: 'Description' },
                        { key: 'approvalLevel', label: 'Approval Level' },
                        { key: 'approvedBy', label: 'Approved By' },
                        { key: 'designation', label: 'Designation' },
                        { key: 'reason', label: 'Reason' },
                        { key: 'effectivityDate', label: 'Effectivity Date' },
                        { key: 'dateApproved', label: 'Date Approved' },
                        { key: 'cumulativeCD', label: 'Cumulative C.D.' },
                        { key: 'status', label: 'Status' },
                        { key: 'continuance', label: 'Continuance' },
                        { key: 'resumption', label: 'Resumption' },
                        { key: 'edit', label: 'Edit' }]}
                    list={data}
                    className='pb-3'/>
            </div>
        </div>
    );
}

const SuspensionResumption: any = withLoading(SuspensionResumptionScreen);

export default SuspensionResumption;
