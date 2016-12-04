/**
 * @author Bilal Cinarli
 */

'use strict';

import {createReducer} from '../system/store';
import * as notificationActions from '../constants/actions/notification';

const initialState = {
    notification:     {},
    showNotification: false
};

export default createReducer(initialState, {
    [notificationActions.default.SHOW_NOTIFICATION]: (state, payload) => {
        return Object.assign({}, state, {
            notification:     payload,
            showNotification: true
        });
    },
    [notificationActions.default.HIDE_NOTIFICATION]: (state) => {
        return Object.assign({}, state, {
            notification:     {},
            showNotification: false
        });
    }
});
