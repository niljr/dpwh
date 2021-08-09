// @flow
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setFlashNotification } from '../../redux/modules/flashNotification';
import Button from '../../components/base/Button/Button';
import DashboardScreen from './DashboardScreen';
import { dummy } from './dummy';
import Typography from '../../components/base/Typography/Typography';
import { updateSearch } from '../../redux/modules/contract';
import { getTasks } from '../../api/tasks';

export default function DashboardContainer(): React$Element<any> {
    const dispatch = useDispatch();
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(true);
    const [assignments, setAssignments] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchValue, setSearchValue] = useState('');
    const [filters, setFilters] = useState([
        { total: 0, label: 'all', buttonVariant: 'primary' },
        { total: 0, label: 'nys', buttonVariant: 'warning' },
        { total: 0, label: 'ongoing', buttonVariant: 'success' },
        { total: 0, label: 'completed', buttonVariant: 'info' },
        { total: 0, label: 'accepted', buttonVariant: 'secondary' },
        { total: 0, label: 'terminated', buttonVariant: 'danger' }]);
    const tableHeader = [
        { key: 'contractId', label: 'CONTACT ID' },
        { key: 'description', label: 'Description' },
        { key: 'contractorName', label: 'CONTACTOR / LGU NAME' },
        { key: 'expiryDate', label: 'EFFECTIVITIY / EXPIRY DATE' },
        { key: 'accomplishment', label: '%ACCOMPLISHED / SPLIPPAGE' },
        { key: 'status', label: 'STATUS' }
    ];

    useEffect(() => {
        prepareData();
    }, []);

    const prepareData = async () => {
        try {
            // TODO: replace dummy

            const data = await getTasks();

            const preview = data.map(assignment => {
                const filterIndex = filters.findIndex(f => f.label === assignment.status.toLowerCase());

                filters[filterIndex].total += 1;

                return {
                    ...assignment,
                    idComponent: <Button onClick={() => handleSelect(assignment.contractId)} className='dashboard__data-id' variant='success'>
                        <Typography variant='size-12' color='color-light' weight='semi-bold'>{assignment.contractId}</Typography>
                    </Button>,
                    date: `${assignment.effectivityDate} -
                    ${assignment.expiryDate}`
                };
            });

            setFilters(filters);
            setAssignments(preview);
        } catch (err) {
            console.error(err);

            dispatch(setFlashNotification({
                message: 'Failed to load data.',
                isError: true
            }));
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelect = (id: string) => {
        dispatch(updateSearch({
            searchIdType: 'contractId',
            searchId: id
        }));
        history.push('/contract-management');
    };

    const getFilteredAssignments = () => {
        return assignments.filter(({ status }) => {
            return selectedFilter === 'all' || status === selectedFilter;
        });
    };

    const getSearchData = (arr) => {
        if (searchValue) {
            const pattern = new RegExp(searchValue, 'i');

            return assignments.filter(({ description, contractor, contractId }) =>
                pattern.test(description) || pattern.test(contractor) || pattern.test(contractId)
            );
        }

        return arr;
    };

    const handleSelectedFilter = (type: string) => {
        setSelectedFilter(type);
    };

    const handleSearch = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    return <DashboardScreen
        tableHeader={tableHeader}
        assignments={getSearchData(getFilteredAssignments())}
        handleSelectedFilter={handleSelectedFilter}
        selectedFilter={selectedFilter}
        filters={filters}
        isLoading={isLoading}
        handleSearch={handleSearch} />;
}
