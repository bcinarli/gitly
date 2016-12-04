/**
 * @author Bilal Cinarli
 */

'use strict';

import {tryParse} from './common';

export function $http(url) {
    let ajax = function(method, url, data) {

        let promise = new Promise(function(resolve, reject) {
            let request     = new XMLHttpRequest(),
                uri         = url,
                postData    = '',
                contentType = 'application/json; charset:utf-8';

            if(data && method === 'GET') {
                uri += '?';
                let argcount = 0;
                for(var key in data) {
                    if(data.hasOwnProperty(key)) {
                        if(argcount++) {
                            uri += '&';
                        }
                        uri += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                    }
                }
            }

            request.open(method, uri);
            request.setRequestHeader('Content-Type', contentType);

            request.onload = function() {
                if(this.status >= 200 && this.status < 400) {
                    let response = this.response;

                    resolve(tryParse(response));
                } else {
                    reject({
                        status:           this.status,
                        statusText:       this.statusText,
                        response:         tryParse(this.response),
                        originalResponse: this
                    });
                }
            };

            request.onerror = function() {
                reject({
                    status:           this.status,
                    statusText:       this.statusText,
                    response:         tryParse(this.response),
                    originalResponse: this
                });
            };

            request.send(postData);
        });

        return promise;
    };

    return {
        'get':    function(data, options) {
            return ajax('GET', url, data, options);
        },
        'post':   function(data, options) {
            return ajax('POST', url, data, options);
        },
        'put':    function(data, options) {
            return ajax('PUT', url, data, options);
        },
        'delete': function(data, options) {
            return ajax('DELETE', url, data, options);
        }
    };
}

export const plainGet = (url, callback) => {
    $http(url)
        .get()
        .then((response) => {
            callback({
                status:  'success',
                details: response
            });
        })
        .catch((response) => {
            callback({
                status:  'error',
                details: response
            });
        });
}