/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };

        this.open  = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        this.open();
    }

    componentWillReceiveProps(newProps) {
        if(!this.state.isVisible && newProps) {
            this.open();
        }
    }

    close() {
        this.setState({
            isVisible: false
        });

        if(this.props.onClose) {
            this.props.onClose();
        }

        this.props.dispatch({
            type: 'HIDE_NOTIFICATION'
        });
    }

    open() {
        this.setState({
            isVisible: true
        });

        if(this.props.onOpen) {
            this.props.onOpen();
        }
    }

    render() {
        return this.state.isVisible ? (
            <div className={classNames('notification', this.props.className)}>
                <div className="notification-content">
                    {
                        this.props.title
                            ? <h3 className="notification-content-title">{this.props.title}</h3>
                            : ''
                    }

                    <div className="notification-content-text">
                        {
                            this.props.content
                                ?
                            (() => {
                                let Content = this.props.content;

                                return (
                                    <Content />
                                )
                            })()
                                : this.props.children
                        }
                    </div>
                    {
                        this.props.closable
                            ? <a className={classNames('notification-close')} onClick={this.close}>X</a>
                            : ''
                    }
                </div>
            </div>
        )
            : false
    }
}

Notification.propTypes = {
    className: React.PropTypes.string,
    title:     React.PropTypes.string,
    closable:  React.PropTypes.bool
};

Notification.defaultProps = {
    title:    '',
    closable: true
};

export default connect()(Notification);