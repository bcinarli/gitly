/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';

import SearchForm from './search-form';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header id="masthead" className="page-header">
                <div className="container">
                    <a href="./" className="branding">
                        <i className="icon-octocat icon-2x" />
                        <span className="branding-name">Gitly</span>
                        <span className="branding-info">a simple react app</span>
                    </a>

                    <SearchForm />
                </div>
            </header>
        )
    }
}

export default Header;