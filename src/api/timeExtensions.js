import makeApiRequest from '../api/makeApiCall';
import { config } from '../config/constants';

const TIME_EXTENSION_ENDPOINT = config.timeExtensions;

/**
 * Add TimeExtension
 * @param {Object} data
 * @returns {Promise}
 */
export const addTimeExtension = async (data:Object) => {
    return await makeApiRequest(TIME_EXTENSION_ENDPOINT, 'POST', data);
};

/**
 * Update Time Extension
 * @param {Object} data
 * @param {String} id
 * @returns {Promise}
 */
export const updateTimeExtension = async (data: Object, id: string) => {
    return await makeApiRequest(`${TIME_EXTENSION_ENDPOINT}${id}`, 'PUT', data);
};

/**
 * Get all Time Extensions
 * @returns {Promise}
 */
export const getAllTimeExtensions = async () => {
    return await makeApiRequest(TIME_EXTENSION_ENDPOINT);
};
