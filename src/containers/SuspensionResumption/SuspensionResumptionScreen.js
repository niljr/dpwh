// @flow
import React from 'react';
import SectionWithAction from '../../components/base/SectionWithAction/SectionWithAction';
import TableDetails from '../../components/base/TableDetails/TableDetails';
import withLoading from '../../components/modules/withLoading/withLoading';
import './suspension-resumption.scss';

type Props = {
    data: Array<any>
}

function SuspensionResumptionScreen({ data }: Props): React$Element<any> {
    return (
        <div className='suspension-resumption'>
            <SectionWithAction
                label='Suspension / Resumption'
                className='mt-2'/>

            <div className='mx-3 mb-3'>
                <TableDetails
                    headers={[
                        'suspensionOrderNo', 'extent', 'description', 'approvalLevel', 'approvedBy', 'designation',
                        'reason', 'effectivityDate', 'dateApproved', 'cumulativeCD', 'status', 'continuance', 'resumption']}
                    list={data}
                    className='pb-3'/>
            </div>
        </div>
    );
}

const SuspensionResumption: any = withLoading(SuspensionResumptionScreen);

export default SuspensionResumption;
