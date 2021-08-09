import makeApiRequest from '../api/makeApiCall';
import { config } from '../config/constants';

const SUSPENSION_ENDPOINT = config.suspensions;

/**
 * Add Suspension
 * @param {Object} data
 * @returns {Promise}
 */
export const addSuspension = async (data:Object) => {
    return await makeApiRequest(SUSPENSION_ENDPOINT, 'POST', data);
};

/**
 * Update Suspension
 * @param {Object} data
 * @param {String} id
 * @returns {Promise}
 */
export const updateSuspension = async (data: Object, id: string) => {
    return await makeApiRequest(`${SUSPENSION_ENDPOINT}${id}`, 'PUT', data);
};

/**
 * Get all suspensions
 * @returns {Promise}
 */
export const getAllSuspensions = async () => {
    return await makeApiRequest(SUSPENSION_ENDPOINT);
};
