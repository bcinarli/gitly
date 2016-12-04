/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import classNames from 'classnames';

import ui from '../../modules/ui';
import {getUserRepos} from '../../modules/user';
import notifications from '../../modules/notifications';

import Meta from '../meta';
import Notification from '../notification';

class UserRepos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repos: []
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
                    repos: response.details
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
                                this.state.repos.map((repo) => {
                                    return (
                                        <li key={repo.id} className="user-repo">
                                            <a href={repo.html_url} className="user-repo-name" target="_blank">
                                                {repo.name}
                                                <i className="icon-link-external" />
                                            </a>

                                            <div className="user-repo-description">
                                                <p>{repo.description}</p>
                                            </div>

                                            <div className="user-repo-meta">
                                                {
                                                    repo.language !== null
                                                        ? <Meta value={repo.language} />
                                                        : ''
                                                }
                                                <Meta icon="repo-forked" title="Forks" value={repo.forks_count} />
                                                <Meta icon="star" title="Star" value={repo.stargazers_count} />
                                                <Meta icon="eye" title="Watchers" value={repo.watchers_count} />
                                            </div>
                                        </li>
                                    )
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