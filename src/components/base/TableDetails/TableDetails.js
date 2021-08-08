// @flow
import React from 'react';
import Table from 'react-bootstrap/Table';
import { camelToReadableText } from '../../../utils/helpers';
import Typography from '../Typography/Typography';
import './table-details.scss';

type Props = {
    className?: string,
    headers: Array<any>,
    list: Array<any>,
}

export default function TableDetails({ className = '', headers, list }: Props): React$Element<any> {
    return (
        <div className={`table-details ${className}`} >
            <Table
                striped={true}
                bordered={true}
                responsive='xl'>
                <thead>
                    <tr>
                        {headers.map((header, i) =>
                            <th className='table__header' key={i}>
                                <Typography color='color-light' weight='semi-bold'>
                                    {typeof header === 'object'
                                        ? header.label
                                        : camelToReadableText(header)
                                    }</Typography>
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {list.length
                        ? list.map((item, i) =>
                            <tr key={i} className='table__data-row'>
                                {headers.map((headerKey, h) =>
                                    <td className='table__data' key={h}>
                                        <Typography>
                                            {typeof headerKey === 'object'
                                                ? item[headerKey.key]
                                                : item[headerKey]}
                                        </Typography>
                                    </td>
                                )}
                            </tr>
                        )
                        : <tr className='table__data-row'>
                            <td colSpan={headers.length}>
                                <Typography className='text-center'>No Record Found.</Typography>
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
}
