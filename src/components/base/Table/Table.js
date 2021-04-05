// @flow
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaSortUp, FaSortDown, FaSort } from 'react-icons/fa';
import Pagination from '../Paginate/Paginate';
import './table.scss';

type Props = {
    headers: Array<any>,
    list: Array<any>,
    withFilter?: boolean,
    isStriped?: boolean,
    isHover?: boolean
}

export default function AppTable({ headers, list, withFilter, isStriped = true, isHover = false }: Props): React$Element<any> {
    const [sortBy, setSortBy] = useState('id');
    const [isAsc, setIsAsc] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const sortData = list.sort((a, b) => {
        if (isAsc) {
            if (a[sortBy] < b[sortBy]) return -1;
            else if (a[sortBy] > b[sortBy]) return 1;
        } else {
            if (a[sortBy] > b[sortBy]) return -1;
            else if (a[sortBy] < b[sortBy]) return 1;
        }

        return 0;
    });

    const getPagedData = () => {
        return sortData.slice((currentPage - 1) * 10, currentPage * 10);
    };

    const handleSort = (key: string) => {
        if (key === sortBy) {
            setIsAsc(!isAsc);
        } else {
            setSortBy(key);
            setIsAsc(true);
        }

        setCurrentPage(1);
    };

    return (
        <div className='table'>
            <Table
                striped={isStriped}
                hover={isHover}
                responsive='sm'>
                <thead>
                    <tr>
                        {headers.map(({ key, label }) =>
                            <th className='table__header' key={key}>
                                <div className='flex-spaced align-items-end'>
                                    {label}
                                    <div className='table__sort-icon' onClick={() => handleSort(key)}>
                                        {sortBy === key
                                            ? isAsc ? <FaSortUp size={15}/> : <FaSortDown size={15} />
                                            : <FaSort size={15} color='#d1d1d1'/>
                                        }
                                    </div>
                                </div>
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {getPagedData().map((item, i) =>
                        <tr key={i} className='table__data-row'>
                            {headers.map(({ key }) =>
                                <td className='table__data' key={key}>
                                    {item.hasOwnProperty(`${key}Component`)
                                        ? item[`${key}Component`]
                                        : item[key]
                                    }</td>
                            )}
                        </tr>
                    )}
                </tbody>
            </Table>

            <Pagination
                currentPage={currentPage}
                totalPage={Math.ceil(list.length / 10)}
                handlePageClick={setCurrentPage}
                dataLength={list.length}
                dataShowingLength={getPagedData().length} />
        </div>
    );
}
