// @flow
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './paginate.scss';

type Props = {
    currentPage: number,
    totalPage: number,
    handlePageClick: (number) => void,
    dataLength: number,
    dataShowingLength: number
}

export default function Paginate({ currentPage, totalPage, handlePageClick, dataLength, dataShowingLength }: Props): React$Element<any> {
    const getRange = (start: number, end: number) => {
        return Array(end - start + 1)
            .fill()
            .map((v, i) => i + start);
    };

    const pagination = () => {
        let delta: number;

        if (totalPage <= 4) {
            delta = 4;
        } else {
            delta = currentPage > 4 && currentPage < totalPage - 3 ? 2 : 4;
        }

        const range = {
            start: Math.round(currentPage - delta / 2),
            end: Math.round(currentPage + delta / 2)
        };

        if (range.start - 1 === 1 || range.end + 1 === totalPage) {
            range.start += 1;
            range.end += 1;
        }

        let pages: any =
          currentPage > delta
              ? getRange(Math.min(range.start, totalPage - delta), Math.min(range.end, totalPage))
              : getRange(1, Math.min(totalPage, delta + 1));

        const withDots = (value, pair) => (pages.length + 1 !== totalPage ? pair : [value]);

        if (pages[0] !== 1) {
            pages = withDots(1, [1, '...']).concat(pages);
        }

        if (pages[pages.length - 1] < totalPage) {
            pages = pages.concat(withDots(totalPage, ['...', totalPage]));
        }

        return pages;
    };

    return (
        <div className='flex-spaced align-items-center'>
            <p className='mb-0 ml-3'>
                Showing {(currentPage * 10) - 9} to {((currentPage * 10) - 9) + (dataShowingLength - 1)} of {dataLength} entr{dataLength === 1 ? 'y' : 'ies'}
            </p>

            <div className='paginate'>
                <Button
                    disabled={currentPage === 1}
                    onClick={() => handlePageClick(currentPage - 1)}
                    size='sm'
                    variant='link'>Previous</Button>
                <ButtonGroup size='sm'>
                    {pagination().map((page, i) =>
                        <Button
                            key={i}
                            className='ml-1'
                            disabled={page === '...'}
                            onClick={() => handlePageClick(page)}
                            variant={currentPage === page ? 'light' : 'link'}>
                            {page}
                        </Button>
                    )}
                </ButtonGroup>
                <Button
                    size='sm'
                    variant='link'
                    disabled={currentPage === totalPage}
                    onClick={() => handlePageClick(currentPage + 1)}
                    className='ml-1'>Next</Button>
            </div>
        </div>
    );
}
