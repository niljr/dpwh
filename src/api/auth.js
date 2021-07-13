import makeApiRequest from '../api/makeApiCall';
import { config } from '../config/constants';

const AUTH_ENDPOINT = config.authenticate;

/**
 * Create user / Register
 * @param {Object} data { name, username, password }
 * @returns {Promise}
 */
export const login = async (data: Object) => {
    return await makeApiRequest(`${AUTH_ENDPOINT}`, 'POST', data);
};
