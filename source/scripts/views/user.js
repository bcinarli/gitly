/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';

import ui from '../modules/ui';
import {getUser} from '../modules/user';
import notifications from '../modules/notifications';

import UserCard from '../components/user/card';
import UserRepos from '../components/user/repos';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: false
        }
    }

    componentDidMount() {
        ui.addPageClass('user');

        this.showUser(this.props.params.user);
    }

    componentWillReceiveProps(newProps) {
        if(newProps.params !== this.props.params) {
            this.showUser(newProps.params.user);
        }
    }

    showUser(user) {
        ui.startLoading();

        getUser(user, (response) => {
            if(response.status === 'success') {
                notifications.hideNotification();

                this.setState({
                    user: response.details
                });
            }
            else {
                this.setState({
                    user: false
                });

                if(response.details.status === 404) {
                    notifications.userNotFound();
                }

                else {
                    notifications.systemError(response.details.statusText);
                }
            }
        });

        ui.stopLoading();
    }

    render() {
        return (
            <div className="page-content">
                {
                    this.state.user
                        ? <UserCard {...this.state.user} />
                        : ''
                }
                {
                    this.state.user
                        ? <UserRepos {...this.state.user} />
                        : ''
                }
            </div>
        )
    }
}

export default connect()(User);