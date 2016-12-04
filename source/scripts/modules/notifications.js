/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import {store} from '../store';

const notification = (type, message) => {
    store.dispatch({
        type:    'SHOW_NOTIFICATION',
        payload: {
            className: type,
            content:   message,
            closable:  false
        }
    })
};

const notificationWarning = (message) => {
    return notification('notification-warning', message);
};

const notificationError = (message) => {
    return notification('notification-error', message);
};

export const hideNotification = () => {
    store.dispatch({
        type: 'HIDE_NOTIFICATION'
    });
};

export const userNotFound = (username) => {
    let message = () => {
        return (
            <p>We cannot find a user called <strong>{username}</strong>. You can search another
                user by using the search field at the header</p>
        )
    };

    notificationWarning(message);
};

export const systemError = (error) => {
    let message = () => {
        return (
            <div>
                <p>There was an error while connecting to API. Please try sometime later.</p>
                <p>Error Status: <br /> {error}</p>
            </div>
        )
    };

    notificationError(message);
};

export default {
    hideNotification,
    systemError,
    userNotFound
}