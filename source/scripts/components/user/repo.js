/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';

import Meta from '../meta';

class Repo extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <li className="user-repo">
                <a href={this.props.html_url} className="user-repo-name" target="_blank">
                    {this.props.name}
                    <i className="icon-link-external" />
                </a>

                <div className="user-repo-description">
                    <p>{this.props.description}</p>
                </div>

                <div className="user-repo-meta">
                    {
                        this.props.language !== null
                            ? <Meta value={this.props.language} />
                            : ''
                    }
                    <Meta icon="repo-forked" title="Forks" value={this.props.forks_count} />
                    <Meta icon="star" title="Star" value={this.props.stargazers_count} />
                    <Meta icon="eye" title="Watchers" value={this.props.watchers_count} />
                </div>
            </li>
        );
    }
}

export default Repo;