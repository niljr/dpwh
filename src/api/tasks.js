import makeApiRequest from '../api/makeApiCall';
import { config } from '../config/constants';

const TASK_ENDPOINT = config.tasks;

/**
 * Add task
 * @param {Object} data { name, username, password }
 * @returns {Promise}
 */
export const addTask = async (data:Object) => {
    return await makeApiRequest(TASK_ENDPOINT, 'POST', data);
};

/**
 * Get All tasks
 * @returns {Promise}
 */
export const getAllTasks = async () => {
    return await makeApiRequest(TASK_ENDPOINT, 'GET');
};

/**
 * Get task by contractId
 * @param {String} id
 * @returns {Promise}
 */
export const getTaskByContractId = async (id) => {
    return await makeApiRequest(`${TASK_ENDPOINT}contractId/${id}`, 'GET');
};
