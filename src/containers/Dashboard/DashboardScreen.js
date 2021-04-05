// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import Typography from '../../components/base/Typography/Typography';
import Table from '../../components/base/Table/Table';
import Button from '../../components/base/Button/Button';
import ProgressStep from '../../components/base/ProgressStep/ProgressStep';
import withLoading from '../../components/modules/withLoading/withLoading';
import './dashboard.scss';

type Props = {
    tableHeader: Array<any>,
    assignments: Array<any>,
    filters: Array<any>,
    handleSelectedFilter: (type: string) => void,
    selectedFilter: string,
    handleSearch: (e: Object) => void,
    data: Object
}

function DashboardScreen({ tableHeader, assignments, filters, handleSelectedFilter, selectedFilter, handleSearch, data }: Props): React$Element<any> {
    return (
        <div className='dashboard__wrapper'>
            <div className='mx-md-5 px-md-5 mx-sm-3 px-sm-0'>
                <ProgressStep />
            </div>

            <div className='dashboard'>
                <div className='dashboard__header'>
                    <Typography variant='size-20' weight='semi-bold'>PE ASSIGNMENTS DASHBOARD</Typography>
                </div>

                <Row className='dashboard__filter'>
                    {filters.map(filter =>
                        <Col key={filter.label} xs={4} lg={2}>
                            <Button
                                className={`dashboard__filter-item -${filter.label}`}
                                variant={filter.buttonVariant}
                                onClick={() => handleSelectedFilter(filter.label)}>
                                <div className='flex-spaced'>
                                    <Typography variant={filter.label === 'all' ? 'size-34' : 'size-14'} color='color-3'>{filter.label.toUpperCase()}</Typography>
                                    {selectedFilter === filter.label && (
                                        <FaCheckCircle color='#EFEFEF' className='dashboard__filter-item__icon'/>
                                    )}
                                </div>
                                {filter.label !== 'all' && (
                                    <Typography variant='size-24' color='color-3' weight='semi-bold'>
                                        {filter.total}
                                    </Typography>
                                )}
                            </Button>
                        </Col>
                    )}
                </Row>

                <div className='dashboard__search'>
                    <Typography weight='semi-bold' className='mr-2'>Search:</Typography>
                    <input onChange={handleSearch}/>
                </div>

                <Table
                    data={data}
                    headers={tableHeader}
                    list={assignments}
                    isStriped={true}/>
            </div>
        </div>
    );
}

const Dashboard: any = withLoading(DashboardScreen);

export default Dashboard;
