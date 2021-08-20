import makeApiRequest from '../api/makeApiCall';
import { config } from '../config/constants';

const USER_ENDPOINT = config.users;

/**
 * Create user / Register
 * @param {Object} data { name, username, password }
 * @returns {Promise}
 */
export const createUser = async (data:Object) => {
    return await makeApiRequest(`${USER_ENDPOINT}createOne`, 'POST', data);
};

export const getAllEngineers = async () => {
    return await makeApiRequest(`${USER_ENDPOINT}getAllEngineers`);
};

export const getUser = async (id: string) => {
    return await makeApiRequest(`${USER_ENDPOINT}${id}`);
};
