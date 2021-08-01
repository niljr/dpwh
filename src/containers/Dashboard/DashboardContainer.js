// @flow
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setFlashNotification } from '../../redux/modules/flashNotification';
import Button from '../../components/base/Button/Button';
import DashboardScreen from './DashboardScreen';
import Typography from '../../components/base/Typography/Typography';
import { updateSearch } from '../../redux/modules/contract';
import { getAllTasks } from '../../api/tasks';
import AppEventEmitter, { AppEvent } from '../../utils/AppEvents';

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
        { key: 'contractId', label: 'CONTRACT ID' },
        { key: 'description', label: 'Description' },
        { key: 'contractorName', label: 'CONTACTOR / LGU NAME' },
        { key: 'expiryDate', label: 'EFFECTIVITIY / EXPIRY DATE' },
        { key: 'accomplishment', label: '%ACCOMPLISHED / SPLIPPAGE' },
        { key: 'status', label: 'STATUS' }
    ];

    useEffect(() => {
        prepareData();
        const addTaskListener = AppEventEmitter.addListener(AppEvent.AddTask, handleAddedTask);

        return () => {
            addTaskListener.remove();
        };
    }, []);

    const handleAddedTask = (newTask) => {
        const updatedFilters = updateFilter(newTask.status, filters);

        setFilters(updatedFilters);
        setAssignments((prev) => ([
            ...prev,
            addDataComponent(newTask)
        ]));
    };

    const prepareData = async () => {
        try {
            const data = await getAllTasks();
            let updatedFilters = [...filters];
            const preview = data.map(assignment => {
                updatedFilters = updateFilter(assignment.status, updatedFilters);

                return addDataComponent(assignment);
            });

            setFilters(filters);
            setAssignments(preview);
            setIsLoading(false);
        } catch (err) {
            dispatch(setFlashNotification({
                message: 'Failed to load data.',
                isError: true
            }));
            setIsLoading(false);
        }
    };

    const updateFilter = (status, updatedFilters) => {
        const filterIndex = updatedFilters.findIndex(f => f.label === status.toLowerCase());

        updatedFilters[filterIndex].total += 1;

        return updatedFilters;
    };

    const addDataComponent = (task) => ({
        ...task,
        contractIdComponent: <Button onClick={() => handleSelect(task.contractId)} className='dashboard__data-id' variant='success'>
            <Typography variant='size-12' color='color-light' weight='semi-bold'>{task.contractId}</Typography>
        </Button>,
        date: `${task.effectivityDate} -
        ${task.expiryDate}`
    });

    const handleSelect = (id: string) => {
        dispatch(updateSearch({
            searchIdType: 'contractId',
            searchId: id
        }));
        history.push('/contract-management');
    };

    const getFilteredAssignments = () => {
        return assignments.filter(({ status }) => {
            return selectedFilter === 'all' || status.toLowerCase() === selectedFilter;
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
