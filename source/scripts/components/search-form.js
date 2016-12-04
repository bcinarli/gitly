/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';

class SearchField extends React.Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();

        let q = this.refs.form.querySelector('#q');

        if(q.value.length > 0) {
            this.context.router.push({
                pathname: '/' + q.value
            });
        }
    }

    render() {
        return (
            <form ref="form" onSubmit={this.submit} className="search-form">
                <label className="item item-stacked">
                    <input type="search" name="q" id="q" className="one-whole" placeholder="Search for a Github user" />
                    <i className="icon-search" />
                </label>
            </form>
        )
    }
}

SearchField.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default SearchField;