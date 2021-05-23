// @flow
import React from 'react';
import { FaPlus, FaArrowRight } from 'react-icons/fa';
import SectionWithAction from '../../components/base/SectionWithAction/SectionWithAction';
import TableDetails from '../../components/base/TableDetails/TableDetails';
import withLoading from '../../components/modules/withLoading/withLoading';
import './potential-vo.scss';

type Props = {
    variationOrder: Array<any>,
    changeList: Array<any>,
    handleToggleForm: (actionType: 'edit' | 'add', data: null | Object) => void
}

function PotentialVOScreen({ variationOrder, changeList, handleToggleForm }: Props): React$Element<any> {
    return (
        <div className='potential-vo'>
            <SectionWithAction
                label='Change Needed List'
                buttonLabel='ADD'
                buttonIcon={FaPlus}
                className='mt-2'
                onButtonClick={() => handleToggleForm('add')}/>

            <div className='potential-vo__content'>
                <TableDetails
                    headers={['dateIdentified', 'reason', 'descriptionOfChange', 'remarks', 'statusStage', 'edit']}
                    list={changeList}/>

                <SectionWithAction
                    label='Variantion Order'
                    buttonLabel='Go to Variation Order'
                    buttonIcon={FaArrowRight}
                    className='mt-2'/>
                <TableDetails
                    headers={['variationOrderNo', 'dateIdentified', 'reason', 'descriptionOfChange', 'remarks', 'statusStage', 'edit']}
                    list={variationOrder}
                    className='pb-3'/>
            </div>
        </div>
    );
}

const PotentialVO: any = withLoading(PotentialVOScreen);

export default PotentialVO;
