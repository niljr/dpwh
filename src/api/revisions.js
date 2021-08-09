import makeApiRequest from '../api/makeApiCall';
import { config } from '../config/constants';

const REVISIONS_ENDPOINT = config.revisions;

/**
 * Add Revision
 * @param {Object} data
 * @returns {Promise}
 */
export const addRevision = async (data:Object) => {
    return await makeApiRequest(REVISIONS_ENDPOINT, 'POST', data);
};

/**
 * Update Revision
 * @param {Object} data
 * @param {String} id
 * @returns {Promise}
 */
export const updateRevision = async (data: Object, id: string) => {
    return await makeApiRequest(`${REVISIONS_ENDPOINT}${id}`, 'PUT', data);
};

/**
 * Get all revisions
 * @returns {Promise}
 */
export const getAllRevisions = async () => {
    return await makeApiRequest(REVISIONS_ENDPOINT);
};
