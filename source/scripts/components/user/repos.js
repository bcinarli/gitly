/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import classNames from 'classnames';

import ui from '../../modules/ui';
import {getUserRepos} from '../../modules/user';
import notifications from '../../modules/notifications';

import Notification from '../notification';
import Repo from './repo';

class UserRepos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repos: [],
            ownRepos: [],
            forkedRepos: []
        };
    }

    componentDidMount() {
        this.showRepos(this.props.login);
    }

    componentWillReceiveProps(newProps) {
        if(newProps.login !== this.props.login) {
            this.showRepos(newProps.login);
        }
    }

    showRepos(username) {
        ui.startLoading();

        getUserRepos(username, (response) => {
            if(response.status === 'success') {
                this.setState({
                    repos: response.details,
                    ownRepos: response.details.filter(item => { return !item.fork}),
                    forkedRepos: response.details.filter(item => { return item.fork}),
                });
            }

            else {
                notifications.systemError(response.details.statusText);
            }

            ui.stopLoading();
        });
    }

    render() {
        return (
            <div className={classNames('user-repos-wrapper', {'is-hidden': !this.props.id})}>
                {
                    this.props.public_repos > 0
                        ?
                    <div className="user-repo-list">
                        <h3 className="user-repo-list-title">User Repos</h3>
                        <ol className="user-repos">
                            {
                                this.state.ownRepos.map((repo) => {
                                    return <Repo key={repo.id} {...repo} />
                                })
                            }
                        </ol>

                        <h3 className="user-repo-list-title">Forked Repos Repos</h3>
                        <ol className="user-repos">
                            {
                                this.state.forkedRepos.map((repo) => {
                                    return <Repo key={repo.id} {...repo} />
                                })
                            }
                        </ol>
                    </div>
                        :
                    <Notification className="notification-info" closable={false}>
                        <p>User does not have any public repositories.</p>
                    </Notification>
                }
            </div>
        )
    }
}

export default UserRepos;