// @flow
import React from 'react';
import { IoMdReorder, IoMdSearch } from 'react-icons/io';
import { InputGroup, FormControl } from 'react-bootstrap';
import Card from '../../base/Card/Card';
import Typography from '../../base/Typography/Typography';
import Button from '../../base/Button/Button';
import './search-contract.scss';

type Props = {
}

export default function SearchContract(_: Props): React$Element<any> {
    return (
        <Card
            className='search-contract'
            header={<Typography
                color='color-3'
                className='search-contract__header'
                weight='semi-bold'>
                Search
            </Typography>}>
            <div className='search-contract__content'>
                <InputGroup className='mb-2' size='sm'>
                    <InputGroup.Prepend>
                        <InputGroup.Text className='px-1 py-0'><IoMdReorder size={20} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as='select'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </FormControl>
                </InputGroup>

                <InputGroup size='sm'>
                    <FormControl />

                    <InputGroup.Append>
                        <Button variant='dark'>
                            <IoMdSearch size={18} />
                            {/* Go */}
                        </Button>

                    </InputGroup.Append>
                </InputGroup>
            </div>
        </Card>
    );
}
