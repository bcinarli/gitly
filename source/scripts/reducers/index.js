/**
 * @author Bilal Cinarli
 */

'use strict';

import {combineReducers} from 'redux';
import ui from './ui';
import notification from './notification';

export default combineReducers({
    ui,
    notification
});