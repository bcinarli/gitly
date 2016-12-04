/**
 * @author Bilal Cinarli
 */

'use strict';

import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';

import {store} from './store';
import {routes} from './routes'

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={hashHistory}>
            {routes}
        </Router>
    </Provider>
);

render(<Root store={store} />, document.getElementById('gitly-app'));