/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';

import SearchForm from '../components/search-form';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch({
            type:    'ADD_PAGE_CLASS',
            payload: {
                pageClass: 'home'
            }
        });
    }

    render() {
        return (
            <div className="page-content">
                <div className="landing">
                    <h1 className="landing-branding">
                        Gitly
                    </h1>
                    <h2 className="landing-subtitle">a simple react app for listing user repositories</h2>
                    <SearchForm />
                </div>
            </div>
        )
    }
}

export default connect()(Home);