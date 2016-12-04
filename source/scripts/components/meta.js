/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';

class Meta extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="single-meta">
                {
                    this.props.icon
                        ? <i className={'icon-' + this.props.icon} />
                        : ''
                }
                {
                    this.props.title
                        ? <span className="single-meta-title">{this.props.title}</span>
                        : ''

                }
                {
                    this.props.value
                }
            </span>
        )
    }
}

export default Meta;