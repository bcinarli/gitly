/**
 * @author Bilal Cinarli
 */

'use strict';

import {plainGet} from '../system/ajax';

export const getUser = (username, callback) => {
    let user = encodeURI(username);

    plainGet('https://api.github.com/users/' + user, callback);
};

export const getUserRepos = (username, callback) => {
    let user = encodeURI(username);

    plainGet('https://api.github.com/users/' + user + '/repos', callback);
};