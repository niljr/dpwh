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
