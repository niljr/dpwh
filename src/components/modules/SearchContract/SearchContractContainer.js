// @flow
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchContract from './SearchContract';
import type { SearchOption } from '../../../types/';
import { updateSearch } from '../../../redux/modules/contract';

type Props = {
    className?: string
}

const options = [{
    title: 'Contract ID',
    key: 'contract_id'
// }, {
//     title: 'MOA ID',
//     key: 'moa_id'
// }, {
//     title: 'Project ID',
//     key: 'project_id'
}];

export default function SearchContractContainer({ className = '' }: Props): React$Element<any> {
    const dispatch = useDispatch();
    const { searchIdType, searchId } = useSelector(({ contract }) => contract);
    const [selectedSearchIdType, setSelectedSearchIdType] = useState<string>(searchIdType || 'contract_id');
    const [searchError, setSearchError] = useState(null);

    const onChangeSearchIdType = (selected: string) => {
        setSelectedSearchIdType(selected);
    };

    const getLabel = () => {
        const selected: void | SearchOption = options.find((option: SearchOption) => option.key === selectedSearchIdType);

        return selected ? selected.title : '';
    };

    const handleSearch = (e: any) => {
        e.preventDefault();
        const { searchId: { value: searchIdValue }, searchIdType: { value: searchTypeValue } } = e.target;

        setSearchError(null);

        if (!searchIdValue) {
            setSearchError('ID is required');

            return;
        }

        dispatch(updateSearch({
            searchIdType: searchTypeValue,
            searchId: searchIdValue
        }));
    };

    return (
        <SearchContract
            className={className}
            onChangeSearchIdType={onChangeSearchIdType}
            options={options}
            selectedSearchIdType={selectedSearchIdType}
            searchLabel={getLabel()}
            searchId={searchId}
            handleSearch={handleSearch}
            searchError={searchError} />
    );
}
