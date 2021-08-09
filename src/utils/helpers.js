// @flow

import moment from 'moment';

/**
 * Capitalize a string
 * @param {String} str
 * @returns {String}
 */
export function capitalize(str: string): string {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

/**
 * Convert camel case string to readable text
 * @param {Stirng} string
 * @returns {String}
 */
export function camelToReadableText(string: string): string {
    return capitalize(string.replace(/([A-Z])/g, ' $1'));
}

/**
 * Array of string to readable text
 * @param {Array} arr
 * @returns {String}
 */
export function arrayToReadableText(arr: Array<any>): string {
    const items = arr.map(item => capitalize(item));
    const arrLength = items.length;

    if (arrLength === 1) {
        return items[0];
    }

    return items.reduce((result, item, i) => {
        result += `${capitalize(item)}`;

        if (i + 1 === arrLength - 1) {
            result += ' and ';
        } else if (i + 1 < arrLength - 1) {
            result += ', ';
        }

        return result;
    }, '');
}

/**
 * Convert all caps string to readable text
 * @param {Stirng} string
 * @returns {String}
 */
export function allCapsToReadableText(string: string): string {
    return capitalize(string.replace(/_/g, ' '));
}

export const isValidEmail = (str: string): boolean => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);

export const toReadableDate = (date: string): string => moment(new Date(date)).format('MM/DD/YYYY');

export const zeroPadded = (count: number, length: number = 4): string => count.toString().padStart(length, '0');
