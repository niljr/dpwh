// @flow
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaPencilAlt } from 'react-icons/fa';
import PotentialVOScreen from './PotentialVOScreen';
import Button from '../../components/base/Button/Button';
import { setModalContent } from '../../redux/modules/modalEvent';
import { capitalize, camelToReadableText } from '../../utils/helpers';

import { changeList as changeListDummy, variationOrder as variationOrderDummy } from './dummy';
import Typography from '../../components/base/Typography/Typography';

export default function PotentialVOContainer(): React$Element<any> {
    const dispatch = useDispatch();

    const [changeList, setChangeList] = useState([]);
    const [variationOrder, setVariationOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        prepareDate();
        setChangeList(changeListDummy.map(item => ({ ...item, edit: <Button onClick={() => handleToggleForm('edit', item)}><FaPencilAlt /></Button> })));
    }, []);

    const prepareDate = () => {
        setTimeout(() => {
            setVariationOrder(variationOrderDummy);
            setIsLoading(false);
        }, 500);
    };

    const handleToggleForm = (actionType: 'edit' | 'add', data) => {
        const keys = Object.keys(data);

        dispatch(setModalContent({
            modalContent: <div>
                {keys.map(key =>
                    <div className='mb-2'>
                        <Typography>{camelToReadableText(key)}</Typography>
                        <Typography>{data[key]}</Typography>
                    </div>
                )}
            </div>,
            title: `${capitalize(actionType)} Time Extension`
        }));
    };

    return <PotentialVOScreen
        isLoading={isLoading}
        variationOrder={variationOrder}
        changeList={changeList}
        handleToggleForm={handleToggleForm} />;
}
