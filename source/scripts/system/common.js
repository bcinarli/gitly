/**
 * @author Bilal Cinarli
 */

'use strict';

export const tryParse = (str) => {
    try {
        return JSON.parse(str);
    }
    catch(e) {
        return str;
    }
};

export const getFormattedDate = (date) => {
    let _date = new Date(date);

    return _date.toDateString();
};