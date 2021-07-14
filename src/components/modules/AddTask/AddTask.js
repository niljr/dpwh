// @flow
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import Form from '../../base/Form/Form';
import formStructure from './addTaskForm';
import { addTask } from '../../../api/tasks';
import { setFlashNotification } from '../../../redux/modules/flashNotification';
import './add-task.scss';
import { getAllEngineers } from '../../../api/users';
import Typography from '../../base/Typography/Typography';
import { clearModalContent } from '../../../redux/modules/modalEvent';

type Props = {
    className?: string
}

const schema = yup.object().shape({
    projectEngineerId: yup.string().required('Project Engineer is required'),
    effectivityDate: yup.date().typeError('Invalid Effectivity date').required('Effectivity date is required'),
    expiryDate: yup.date().typeError('Invalid Expiry date').when('effectivityDate', (effectivityDate, yup) =>
        effectivityDate && yup.min(effectivityDate, 'Expiry date cannot be earlier that effectivity date')
    ).required('Expiry date is required'),
    projectId: yup.string().required('Project ID is required'),
    contractorName: yup.string().required('Contractor Name is required'),
    componentId: yup.string().required('Project Component ID is required'),
    cost: yup.number('Invalid number').required('Cost is required').positive('Cost is required'),
    typeOfProject: yup.string().test({
        name: 'typeOfProject',
        message: 'Type of Project is required',
        test: (value) => value !== null
    }).nullable(),
    contractName: yup.string().required('Contract name is required.'),
    duration: yup.number('Invalid number').required('Duration is required').positive('Duration is required'),
    municipality: yup.string().test({
        name: 'municipality',
        message: 'Municipality is required',
        test: (value) => value !== null
    }).nullable()
});

export default function AddTask({ className = '' }: Props): React$Element<any> {
    const defaultValue = {
        projectEngineer: '',
        projectId: '',
        contractId: 'random',
        contractorName: '',
        componentId: '',
        municipality: '',
        contractName: '',
        cost: 0,
        duration: 0,
        effectivityDate: new Date()
    };

    const dispatch = useDispatch();

    const [isProcessing, setIsProcessing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [engineers, setEngineers] = useState([]);

    useEffect(() => {
        retrieveAssignee();
    }, []);

    const retrieveAssignee = async () => {
        try {
            const data = await getAllEngineers();
            const engineerOptions = data.map(item => ({ value: item.id, label: item.name }));

            formStructure[0][0].options = engineerOptions;
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    };

    const onSubmitForm = async (formData) => {
        console.log(formData);

        try {
            const data = await addTask(formData);

            dispatch(setFlashNotification({
                message: 'Successfully Submitted!',
                isError: false
            }));

            dispatch(clearModalContent());
        } catch (err) {
            const { data } = err.response;

            dispatch(setFlashNotification({
                message: data.message,
                isError: true
            }));

            setIsProcessing(false);
        }
    };

    return (
        <div className={`add-task ${className}`} >
            {isLoading
                ? <Typography>Retrieving records...</Typography>
                : <Form
                    data={defaultValue}
                    structure={formStructure}
                    onSubmitForm={onSubmitForm}
                    schema={schema}
                    formSize='sm'
                    withCloseButton={true}
                    isProcessing={isProcessing} />
            }
        </div>
    );
}
