/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import Header from '../components/header';
import Preloader from '../components/preloader';
import Notification from '../components/notification';

class GitlyApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={classNames('gitly-app', this.props.pageClass)}>
                {
                    this.props.pageClass !== 'home'
                        ? <Header />
                        : ''
                }
                <Preloader />
                <div id="main" className="page-main container">
                    {
                        this.props.showNotification
                            ? <Notification {...this.props.notification} />
                            : ''
                    }
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const MapStatesToProps = (store) => ({
    ui:               store.ui.ui,
    pageClass:        store.ui.pageClass,
    notification:     store.notification.notification,
    showNotification: store.notification.showNotification
});

export default connect(MapStatesToProps)(GitlyApp);