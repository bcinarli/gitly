/**
 * @author Bilal Cinarli
 */

'use strict';

import {createReducer} from '../system/store';
import * as uiActions from '../constants/actions/ui';

const initialState = {
    ui:        '',
    pageClass: '',
};

export default createReducer(initialState, {
    [uiActions.default.IS_LOADING]: (state) => {
        return Object.assign({}, state, {
            ui: 'isLoading'
        });
    },
    [uiActions.default.IS_LOADED]:  (state) => {
        return Object.assign({}, state, {
            ui: 'isLoaded'
        });
    },
    [uiActions.default.ADD_PAGE_CLASS]:       (state, payload) => {
        return Object.assign({}, state, {
            pageClass: payload.pageClass
        });
    },
    [uiActions.default.REMOVE_PAGE_CLASS]:    (state) => {
        return Object.assign({}, state, {
            pageClass: ''
        });
    }
});
