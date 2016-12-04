/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import GitlyApp from '../containers';

import * as Views from '../views';

export const routes = (
    <Route component={GitlyApp}>
        <IndexRoute component={Views.Home} />
        <Route path="/" component={Views.Home} />
        <Route path="/:user" components={Views.User} />
    </Route>
);