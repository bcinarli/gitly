/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class Preloader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classNames('preloader', {
                'preloader-start': this.props.ui === 'isLoading',
                'preloader-end':   this.props.ui === 'isLoaded'
            })}></div>
        )
    }
}

const MapStatesToProps = (store) => ({
    ui: store.ui.ui
});

export default connect(MapStatesToProps)(Preloader);

