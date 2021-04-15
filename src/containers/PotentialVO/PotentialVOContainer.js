// @flow
import React, { useEffect, useState } from 'react';
import PotentialVOScreen from './PotentialVOScreen';
import { changeList as changeListDummy, variationOrder as variationOrderDummy } from './dummy';

export default function PotentialVOContainer(): React$Element<any> {
    const [changeList, setChangeList] = useState([]);
    const [variationOrder, setVariationOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        prepareDate();
    }, []);

    const prepareDate = () => {
        setTimeout(() => {
            setChangeList(changeListDummy);
            setVariationOrder(variationOrderDummy);
            setIsLoading(false);
        }, 500);
    };

    return <PotentialVOScreen
        isLoading={isLoading}
        variationOrder={variationOrder}
        changeList={changeList} />;
}
