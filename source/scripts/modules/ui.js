/**
 * @author Bilal Cinarli
 */

'use strict';

import {store} from '../store';

export const startLoading = () => {
    store.dispatch({
        type: 'IS_LOADING'
    });
};

export const stopLoading = () => {
    store.dispatch({
        type: 'IS_LOADED'
    });
};

export const addPageClass = (pageClass) => {
    store.dispatch({
        type:    'ADD_PAGE_CLASS',
        payload: {
            pageClass: pageClass
        }
    });
};

export default {
    startLoading,
    stopLoading,
    addPageClass
};