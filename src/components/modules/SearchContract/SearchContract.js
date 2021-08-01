// @flow
import React from 'react';
import { IoMdReorder, IoMdSearch, IoMdArrowDropdown } from 'react-icons/io';
import { InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import Card from '../../base/Card/Card';
import Typography from '../../base/Typography/Typography';
import Button from '../../base/Button/Button';
import type { SearchOption } from '../../../types/';
import './search-contract.scss';

type Props = {
    options: Array<SearchOption>,
    onChangeSearchIdType: (selected: string) => void,
    selectedSearchIdType: string,
    searchLabel: string,
    searchId: string,
    handleSearch: (e: any) => void,
    searchError: string | null
}

export default function SearchContract({
    options, onChangeSearchIdType, selectedSearchIdType, searchLabel, searchId, handleSearch, searchError
}: Props): React$Element<any> {
    return (
        <Card
            className='search-contract'
            header={<Typography
                color='color-light'
                className='search-contract__header'
                weight='semi-bold'>
                Search
            </Typography>}>
            <form className='search-contract__content' onSubmit={handleSearch}>
                <InputGroup className='mb-2' size='sm'>
                    <InputGroup.Prepend>
                        <InputGroup.Text className='px-1 py-0'><IoMdReorder size={20} /></InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl
                        placeholder='Search ID'
                        readOnly={true}
                        value={searchLabel}
                        name='searchType' />

                    <DropdownButton
                        as={InputGroup.Append}
                        variant='outline-light'
                        title={<IoMdArrowDropdown size={15} />}
                        id='searchIdType'>
                        {options.map(option =>
                            <Dropdown.Item onClick={() => onChangeSearchIdType(option.key)} key={option.key}>
                                {option.title}
                            </Dropdown.Item>
                        )}
                    </DropdownButton>
                </InputGroup>

                <InputGroup size='sm' hasValidation={true}>
                    <FormControl
                        name='searchId'
                        defaultValue={searchId}
                        placeholder='Enter ID'
                        isInvalid={searchError !== null} />

                    <InputGroup.Append>
                        <Button variant='dark' type='submit'>
                            <IoMdSearch size={18} className='mr-1'/>
                            Go
                        </Button>
                    </InputGroup.Append>

                    <FormControl.Feedback type='invalid'>{searchError}</FormControl.Feedback>
                </InputGroup>
            </form>
        </Card>
    );
}
