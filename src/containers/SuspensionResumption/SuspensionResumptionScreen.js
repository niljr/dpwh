// @flow
import React from 'react';
import { FaPlus, FaArrowRight } from 'react-icons/fa';
import SectionWithAction from '../../components/base/SectionWithAction/SectionWithAction';
import TableDetails from '../../components/base/TableDetails/TableDetails';
import Button from '../../components/base/Button/Button';
import withLoading from '../../components/modules/withLoading/withLoading';

import './suspension-resumption.scss';

type Props = {
    data: Array<any>
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
