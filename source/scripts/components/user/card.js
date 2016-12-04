/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';

import {getFormattedDate} from '../../system/common';

import Meta from '../meta';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-card">
                <div className="user-avatar">
                    <img src={this.props.avatar_url} alt={this.props.name} className="user-avatar-photo" />
                </div>
                <div className="user-info">
                    <h2 className="user-name">
                        <a href={this.props.html_url} target="_blank">{this.props.name}</a>
                    </h2>
                    <div className="user-meta">
                        <Meta icon="clock" value={'Joined on ' + getFormattedDate(this.props.created_at)} />
                        <Meta icon="location" value={this.props.location} />
                        <Meta icon="branch" value={this.props.public_repos + ' public repo(s)'} />
                        <Meta icon="person" value={this.props.followers + ' follower(s)'} />
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;