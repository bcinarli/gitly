(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],2:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _searchForm = require('./search-form');

var _searchForm2 = _interopRequireDefault(_searchForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                { id: 'masthead', className: 'page-header' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'a',
                        { href: './', className: 'branding' },
                        _react2.default.createElement('i', { className: 'icon-octocat icon-2x' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'branding-name' },
                            'Gitly'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'branding-info' },
                            'a simple react app'
                        )
                    ),
                    _react2.default.createElement(_searchForm2.default, null)
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;

},{"./search-form":6,"react":"react"}],3:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Meta = function (_React$Component) {
    _inherits(Meta, _React$Component);

    function Meta(props) {
        _classCallCheck(this, Meta);

        return _possibleConstructorReturn(this, (Meta.__proto__ || Object.getPrototypeOf(Meta)).call(this, props));
    }

    _createClass(Meta, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                { className: 'single-meta' },
                this.props.icon ? _react2.default.createElement('i', { className: 'icon-' + this.props.icon }) : '',
                this.props.title ? _react2.default.createElement(
                    'span',
                    { className: 'single-meta-title' },
                    this.props.title
                ) : '',
                this.props.value
            );
        }
    }]);

    return Meta;
}(_react2.default.Component);

exports.default = Meta;

},{"react":"react"}],4:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = function (_React$Component) {
    _inherits(Notification, _React$Component);

    function Notification(props) {
        _classCallCheck(this, Notification);

        var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

        _this.state = {
            isVisible: false
        };

        _this.open = _this.open.bind(_this);
        _this.close = _this.close.bind(_this);
        return _this;
    }

    _createClass(Notification, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.open();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (!this.state.isVisible && newProps) {
                this.open();
            }
        }
    }, {
        key: 'close',
        value: function close() {
            this.setState({
                isVisible: false
            });

            if (this.props.onClose) {
                this.props.onClose();
            }

            this.props.dispatch({
                type: 'HIDE_NOTIFICATION'
            });
        }
    }, {
        key: 'open',
        value: function open() {
            this.setState({
                isVisible: true
            });

            if (this.props.onOpen) {
                this.props.onOpen();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return this.state.isVisible ? _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('notification', this.props.className) },
                _react2.default.createElement(
                    'div',
                    { className: 'notification-content' },
                    this.props.title ? _react2.default.createElement(
                        'h3',
                        { className: 'notification-content-title' },
                        this.props.title
                    ) : '',
                    _react2.default.createElement(
                        'div',
                        { className: 'notification-content-text' },
                        this.props.content ? function () {
                            var Content = _this2.props.content;

                            return _react2.default.createElement(Content, null);
                        }() : this.props.children
                    ),
                    this.props.closable ? _react2.default.createElement(
                        'a',
                        { className: (0, _classnames2.default)('notification-close'), onClick: this.close },
                        'X'
                    ) : ''
                )
            ) : false;
        }
    }]);

    return Notification;
}(_react2.default.Component);

Notification.propTypes = {
    className: _react2.default.PropTypes.string,
    title: _react2.default.PropTypes.string,
    closable: _react2.default.PropTypes.bool
};

Notification.defaultProps = {
    title: '',
    closable: true
};

exports.default = (0, _reactRedux.connect)()(Notification);

},{"classnames":1,"react":"react","react-redux":"react-redux"}],5:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preloader = function (_React$Component) {
    _inherits(Preloader, _React$Component);

    function Preloader(props) {
        _classCallCheck(this, Preloader);

        return _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).call(this, props));
    }

    _createClass(Preloader, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: (0, _classnames2.default)('preloader', {
                    'preloader-start': this.props.ui === 'isLoading',
                    'preloader-end': this.props.ui === 'isLoaded'
                }) });
        }
    }]);

    return Preloader;
}(_react2.default.Component);

var MapStatesToProps = function MapStatesToProps(store) {
    return {
        ui: store.ui.ui
    };
};

exports.default = (0, _reactRedux.connect)(MapStatesToProps)(Preloader);

},{"classnames":1,"react":"react","react-redux":"react-redux"}],6:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchField = function (_React$Component) {
    _inherits(SearchField, _React$Component);

    function SearchField(props) {
        _classCallCheck(this, SearchField);

        var _this = _possibleConstructorReturn(this, (SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call(this, props));

        _this.submit = _this.submit.bind(_this);
        return _this;
    }

    _createClass(SearchField, [{
        key: 'submit',
        value: function submit(e) {
            e.preventDefault();

            var q = this.refs.form.querySelector('#q');

            if (q.value.length > 0) {
                this.context.router.push({
                    pathname: '/' + q.value
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { ref: 'form', onSubmit: this.submit, className: 'search-form' },
                _react2.default.createElement(
                    'label',
                    { className: 'item item-stacked' },
                    _react2.default.createElement('input', { type: 'search', name: 'q', id: 'q', className: 'one-whole', placeholder: 'Search for a Github user' }),
                    _react2.default.createElement('i', { className: 'icon-search' })
                )
            );
        }
    }]);

    return SearchField;
}(_react2.default.Component);

SearchField.contextTypes = {
    router: _react2.default.PropTypes.object.isRequired
};

exports.default = SearchField;

},{"react":"react"}],7:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _common = require('../../system/common');

var _meta = require('../meta');

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserCard = function (_React$Component) {
    _inherits(UserCard, _React$Component);

    function UserCard(props) {
        _classCallCheck(this, UserCard);

        return _possibleConstructorReturn(this, (UserCard.__proto__ || Object.getPrototypeOf(UserCard)).call(this, props));
    }

    _createClass(UserCard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'user-card' },
                _react2.default.createElement(
                    'div',
                    { className: 'user-avatar' },
                    _react2.default.createElement('img', { src: this.props.avatar_url, alt: this.props.name, className: 'user-avatar-photo' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'user-info' },
                    _react2.default.createElement(
                        'h2',
                        { className: 'user-name' },
                        _react2.default.createElement(
                            'a',
                            { href: this.props.html_url, target: '_blank' },
                            this.props.name
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'user-meta' },
                        _react2.default.createElement(_meta2.default, { icon: 'clock', value: 'Joined on ' + (0, _common.getFormattedDate)(this.props.created_at) }),
                        _react2.default.createElement(_meta2.default, { icon: 'location', value: this.props.location }),
                        _react2.default.createElement(_meta2.default, { icon: 'branch', value: this.props.public_repos + ' public repo(s)' }),
                        _react2.default.createElement(_meta2.default, { icon: 'person', value: this.props.followers + ' follower(s)' })
                    )
                )
            );
        }
    }]);

    return UserCard;
}(_react2.default.Component);

exports.default = UserCard;

},{"../../system/common":23,"../meta":3,"react":"react"}],8:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _meta = require('../meta');

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Repo = function (_React$Component) {
    _inherits(Repo, _React$Component);

    function Repo(props) {
        _classCallCheck(this, Repo);

        return _possibleConstructorReturn(this, (Repo.__proto__ || Object.getPrototypeOf(Repo)).call(this, props));
    }

    _createClass(Repo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'li',
                { className: 'user-repo' },
                _react2.default.createElement(
                    'a',
                    { href: this.props.html_url, className: 'user-repo-name', target: '_blank' },
                    this.props.name,
                    _react2.default.createElement('i', { className: 'icon-link-external' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'user-repo-description' },
                    _react2.default.createElement(
                        'p',
                        null,
                        this.props.description
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'user-repo-meta' },
                    this.props.language !== null ? _react2.default.createElement(_meta2.default, { value: this.props.language }) : '',
                    _react2.default.createElement(_meta2.default, { icon: 'repo-forked', title: 'Forks', value: this.props.forks_count }),
                    _react2.default.createElement(_meta2.default, { icon: 'star', title: 'Star', value: this.props.stargazers_count }),
                    _react2.default.createElement(_meta2.default, { icon: 'eye', title: 'Watchers', value: this.props.watchers_count })
                )
            );
        }
    }]);

    return Repo;
}(_react2.default.Component);

exports.default = Repo;

},{"../meta":3,"react":"react"}],9:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ui = require('../../modules/ui');

var _ui2 = _interopRequireDefault(_ui);

var _user = require('../../modules/user');

var _notifications = require('../../modules/notifications');

var _notifications2 = _interopRequireDefault(_notifications);

var _notification = require('../notification');

var _notification2 = _interopRequireDefault(_notification);

var _repo = require('./repo');

var _repo2 = _interopRequireDefault(_repo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserRepos = function (_React$Component) {
    _inherits(UserRepos, _React$Component);

    function UserRepos(props) {
        _classCallCheck(this, UserRepos);

        var _this = _possibleConstructorReturn(this, (UserRepos.__proto__ || Object.getPrototypeOf(UserRepos)).call(this, props));

        _this.state = {
            repos: [],
            ownRepos: [],
            forkedRepos: []
        };
        return _this;
    }

    _createClass(UserRepos, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.showRepos(this.props.login);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.login !== this.props.login) {
                this.showRepos(newProps.login);
            }
        }
    }, {
        key: 'showRepos',
        value: function showRepos(username) {
            var _this2 = this;

            _ui2.default.startLoading();

            (0, _user.getUserRepos)(username, function (response) {
                if (response.status === 'success') {
                    _this2.setState({
                        repos: response.details,
                        ownRepos: response.details.filter(function (item) {
                            return !item.fork;
                        }),
                        forkedRepos: response.details.filter(function (item) {
                            return item.fork;
                        })
                    });
                } else {
                    _notifications2.default.systemError(response.details.statusText);
                }

                _ui2.default.stopLoading();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('user-repos-wrapper', { 'is-hidden': !this.props.id }) },
                this.props.public_repos > 0 ? _react2.default.createElement(
                    'div',
                    { className: 'user-repo-list' },
                    _react2.default.createElement(
                        'h3',
                        { className: 'user-repo-list-title' },
                        'User Repos'
                    ),
                    _react2.default.createElement(
                        'ol',
                        { className: 'user-repos' },
                        this.state.ownRepos.map(function (repo) {
                            return _react2.default.createElement(_repo2.default, _extends({ key: repo.id }, repo));
                        })
                    ),
                    _react2.default.createElement(
                        'h3',
                        { className: 'user-repo-list-title' },
                        'Forked Repos Repos'
                    ),
                    _react2.default.createElement(
                        'ol',
                        { className: 'user-repos' },
                        this.state.forkedRepos.map(function (repo) {
                            return _react2.default.createElement(_repo2.default, _extends({ key: repo.id }, repo));
                        })
                    )
                ) : _react2.default.createElement(
                    _notification2.default,
                    { className: 'notification-info', closable: false },
                    _react2.default.createElement(
                        'p',
                        null,
                        'User does not have any public repositories.'
                    )
                )
            );
        }
    }]);

    return UserRepos;
}(_react2.default.Component);

exports.default = UserRepos;

},{"../../modules/notifications":14,"../../modules/ui":15,"../../modules/user":16,"../notification":4,"./repo":8,"classnames":1,"react":"react"}],10:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require('../../system/store');

exports.default = (0, _store.createConstants)('SHOW_NOTIFICATION', 'HIDE_NOTIFICATION');

},{"../../system/store":24}],11:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _store = require('../../system/store');

exports.default = (0, _store.createConstants)('IS_LOADING', 'IS_LOADED', 'ADD_PAGE_CLASS', 'REMOVE_PAGE_CLASS');

},{"../../system/store":24}],12:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _preloader = require('../components/preloader');

var _preloader2 = _interopRequireDefault(_preloader);

var _notification = require('../components/notification');

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GitlyApp = function (_React$Component) {
    _inherits(GitlyApp, _React$Component);

    function GitlyApp(props) {
        _classCallCheck(this, GitlyApp);

        var _this = _possibleConstructorReturn(this, (GitlyApp.__proto__ || Object.getPrototypeOf(GitlyApp)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(GitlyApp, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('gitly-app', this.props.pageClass) },
                this.props.pageClass !== 'home' ? _react2.default.createElement(_header2.default, null) : '',
                _react2.default.createElement(_preloader2.default, null),
                _react2.default.createElement(
                    'div',
                    { id: 'main', className: 'page-main container' },
                    this.props.showNotification ? _react2.default.createElement(_notification2.default, this.props.notification) : '',
                    this.props.children
                )
            );
        }
    }]);

    return GitlyApp;
}(_react2.default.Component);

var MapStatesToProps = function MapStatesToProps(store) {
    return {
        ui: store.ui.ui,
        pageClass: store.ui.pageClass,
        notification: store.notification.notification,
        showNotification: store.notification.showNotification
    };
};

exports.default = (0, _reactRedux.connect)(MapStatesToProps)(GitlyApp);

},{"../components/header":2,"../components/notification":4,"../components/preloader":5,"classnames":1,"react":"react","react-redux":"react-redux"}],13:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _store = require('./store');

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
    var store = _ref.store;
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouter.Router,
            { history: _reactRouter.hashHistory },
            _routes.routes
        )
    );
};

(0, _reactDom.render)(_react2.default.createElement(Root, { store: _store.store }), document.getElementById('gitly-app'));

},{"./routes":20,"./store":21,"react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router"}],14:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.systemError = exports.userNotFound = exports.hideNotification = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notification = function notification(type, message) {
    _store.store.dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: {
            className: type,
            content: message,
            closable: false
        }
    });
};

var notificationWarning = function notificationWarning(message) {
    return notification('notification-warning', message);
};

var notificationError = function notificationError(message) {
    return notification('notification-error', message);
};

var hideNotification = exports.hideNotification = function hideNotification() {
    _store.store.dispatch({
        type: 'HIDE_NOTIFICATION'
    });
};

var userNotFound = exports.userNotFound = function userNotFound(username) {
    var message = function message() {
        return _react2.default.createElement(
            'p',
            null,
            'We cannot find a user called ',
            _react2.default.createElement(
                'strong',
                null,
                username
            ),
            '. You can search another user by using the search field at the header'
        );
    };

    notificationWarning(message);
};

var systemError = exports.systemError = function systemError(error) {
    var message = function message() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'p',
                null,
                'There was an error while connecting to API. Please try sometime later.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Error Status: ',
                _react2.default.createElement('br', null),
                ' ',
                error
            )
        );
    };

    notificationError(message);
};

exports.default = {
    hideNotification: hideNotification,
    systemError: systemError,
    userNotFound: userNotFound
};

},{"../store":21,"react":"react"}],15:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addPageClass = exports.stopLoading = exports.startLoading = undefined;

var _store = require('../store');

var startLoading = exports.startLoading = function startLoading() {
    _store.store.dispatch({
        type: 'IS_LOADING'
    });
};

var stopLoading = exports.stopLoading = function stopLoading() {
    _store.store.dispatch({
        type: 'IS_LOADED'
    });
};

var addPageClass = exports.addPageClass = function addPageClass(pageClass) {
    _store.store.dispatch({
        type: 'ADD_PAGE_CLASS',
        payload: {
            pageClass: pageClass
        }
    });
};

exports.default = {
    startLoading: startLoading,
    stopLoading: stopLoading,
    addPageClass: addPageClass
};

},{"../store":21}],16:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserRepos = exports.getUser = undefined;

var _ajax = require('../system/ajax');

var getUser = exports.getUser = function getUser(username, callback) {
    var user = encodeURI(username);

    (0, _ajax.plainGet)('https://api.github.com/users/' + user, callback);
};

var getUserRepos = exports.getUserRepos = function getUserRepos(username, callback) {
    var user = encodeURI(username);

    (0, _ajax.plainGet)('https://api.github.com/users/' + user + '/repos', callback);
};

},{"../system/ajax":22}],17:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

var _notification = require('./notification');

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  ui: _ui2.default,
  notification: _notification2.default
});

},{"./notification":18,"./ui":19,"redux":"redux"}],18:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createReducer;

var _store = require('../system/store');

var _notification = require('../constants/actions/notification');

var notificationActions = _interopRequireWildcard(_notification);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
    notification: {},
    showNotification: false
};

exports.default = (0, _store.createReducer)(initialState, (_createReducer = {}, _defineProperty(_createReducer, notificationActions.default.SHOW_NOTIFICATION, function (state, payload) {
    return Object.assign({}, state, {
        notification: payload,
        showNotification: true
    });
}), _defineProperty(_createReducer, notificationActions.default.HIDE_NOTIFICATION, function (state) {
    return Object.assign({}, state, {
        notification: {},
        showNotification: false
    });
}), _createReducer));

},{"../constants/actions/notification":10,"../system/store":24}],19:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createReducer;

var _store = require('../system/store');

var _ui = require('../constants/actions/ui');

var uiActions = _interopRequireWildcard(_ui);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
    ui: '',
    pageClass: ''
};

exports.default = (0, _store.createReducer)(initialState, (_createReducer = {}, _defineProperty(_createReducer, uiActions.default.IS_LOADING, function (state) {
    return Object.assign({}, state, {
        ui: 'isLoading'
    });
}), _defineProperty(_createReducer, uiActions.default.IS_LOADED, function (state) {
    return Object.assign({}, state, {
        ui: 'isLoaded'
    });
}), _defineProperty(_createReducer, uiActions.default.ADD_PAGE_CLASS, function (state, payload) {
    return Object.assign({}, state, {
        pageClass: payload.pageClass
    });
}), _defineProperty(_createReducer, uiActions.default.REMOVE_PAGE_CLASS, function (state) {
    return Object.assign({}, state, {
        pageClass: ''
    });
}), _createReducer));

},{"../constants/actions/ui":11,"../system/store":24}],20:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _containers = require('../containers');

var _containers2 = _interopRequireDefault(_containers);

var _views = require('../views');

var Views = _interopRequireWildcard(_views);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = _react2.default.createElement(
    _reactRouter.Route,
    { component: _containers2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: Views.Home }),
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: Views.Home }),
    _react2.default.createElement(_reactRouter.Route, { path: '/:user', components: Views.User })
);

},{"../containers":12,"../views":26,"react":"react","react-router":"react-router"}],21:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = require('redux');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = exports.store = (0, _redux.createStore)(_reducers2.default);

},{"../reducers":17,"redux":"redux"}],22:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.plainGet = undefined;
exports.$http = $http;

var _common = require('./common');

function $http(url) {
    var ajax = function ajax(method, url, data) {

        var promise = new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest(),
                uri = url,
                postData = '',
                contentType = 'application/json; charset:utf-8';

            if (data && method === 'GET') {
                uri += '?';
                var argcount = 0;
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        if (argcount++) {
                            uri += '&';
                        }
                        uri += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                    }
                }
            }

            request.open(method, uri);
            request.setRequestHeader('Content-Type', contentType);

            request.onload = function () {
                if (this.status >= 200 && this.status < 400) {
                    var response = this.response;

                    resolve((0, _common.tryParse)(response));
                } else {
                    reject({
                        status: this.status,
                        statusText: this.statusText,
                        response: (0, _common.tryParse)(this.response),
                        originalResponse: this
                    });
                }
            };

            request.onerror = function () {
                reject({
                    status: this.status,
                    statusText: this.statusText,
                    response: (0, _common.tryParse)(this.response),
                    originalResponse: this
                });
            };

            request.send(postData);
        });

        return promise;
    };

    return {
        'get': function get(data, options) {
            return ajax('GET', url, data, options);
        },
        'post': function post(data, options) {
            return ajax('POST', url, data, options);
        },
        'put': function put(data, options) {
            return ajax('PUT', url, data, options);
        },
        'delete': function _delete(data, options) {
            return ajax('DELETE', url, data, options);
        }
    };
}

var plainGet = exports.plainGet = function plainGet(url, callback) {
    $http(url).get().then(function (response) {
        callback({
            status: 'success',
            details: response
        });
    }).catch(function (response) {
        callback({
            status: 'error',
            details: response
        });
    });
};

},{"./common":23}],23:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var tryParse = exports.tryParse = function tryParse(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return str;
    }
};

var getFormattedDate = exports.getFormattedDate = function getFormattedDate(date) {
    var _date = new Date(date);

    return _date.toDateString();
};

},{}],24:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createConstants = createConstants;
exports.createReducer = createReducer;
function createConstants() {
    for (var _len = arguments.length, constants = Array(_len), _key = 0; _key < _len; _key++) {
        constants[_key] = arguments[_key];
    }

    return constants.reduce(function (acc, constant) {
        acc[constant] = constant;
        return acc;
    }, {});
}

function createReducer(initialState, reducerMap) {
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments[1];

        var reducer = reducerMap[action.type];

        return reducer ? reducer(state, action.payload) : state;
    };
}

},{}],25:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _searchForm = require('../components/search-form');

var _searchForm2 = _interopRequireDefault(_searchForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.dispatch({
                type: 'ADD_PAGE_CLASS',
                payload: {
                    pageClass: 'home'
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'page-content' },
                _react2.default.createElement(
                    'div',
                    { className: 'landing' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'landing-branding' },
                        'Gitly'
                    ),
                    _react2.default.createElement(
                        'h2',
                        { className: 'landing-subtitle' },
                        'a simple react app for listing user repositories'
                    ),
                    _react2.default.createElement(_searchForm2.default, null)
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)()(Home);

},{"../components/search-form":6,"react":"react","react-redux":"react-redux"}],26:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = exports.Home = undefined;

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Home = _home2.default;
exports.User = _user2.default;

},{"./home":25,"./user":27}],27:[function(require,module,exports){
/**
 * @author Bilal Cinarli
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ui = require('../modules/ui');

var _ui2 = _interopRequireDefault(_ui);

var _user = require('../modules/user');

var _notifications = require('../modules/notifications');

var _notifications2 = _interopRequireDefault(_notifications);

var _card = require('../components/user/card');

var _card2 = _interopRequireDefault(_card);

var _repos = require('../components/user/repos');

var _repos2 = _interopRequireDefault(_repos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_React$Component) {
    _inherits(User, _React$Component);

    function User(props) {
        _classCallCheck(this, User);

        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));

        _this.state = {
            user: false
        };
        return _this;
    }

    _createClass(User, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ui2.default.addPageClass('user');

            this.showUser(this.props.params.user);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.params !== this.props.params) {
                this.showUser(newProps.params.user);
            }
        }
    }, {
        key: 'showUser',
        value: function showUser(user) {
            var _this2 = this;

            _ui2.default.startLoading();

            (0, _user.getUser)(user, function (response) {
                if (response.status === 'success') {
                    _notifications2.default.hideNotification();

                    _this2.setState({
                        user: response.details
                    });
                } else {
                    _this2.setState({
                        user: false
                    });

                    if (response.details.status === 404) {
                        _notifications2.default.userNotFound(user);
                    } else {
                        _notifications2.default.systemError(response.details.statusText);
                    }
                }
            });

            _ui2.default.stopLoading();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'page-content' },
                this.state.user ? _react2.default.createElement(_card2.default, this.state.user) : '',
                this.state.user ? _react2.default.createElement(_repos2.default, this.state.user) : ''
            );
        }
    }]);

    return User;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)()(User);

},{"../components/user/card":7,"../components/user/repos":9,"../modules/notifications":14,"../modules/ui":15,"../modules/user":16,"react":"react","react-redux":"react-redux"}]},{},[13])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsInNvdXJjZS9zY3JpcHRzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlL3NjcmlwdHMvY29tcG9uZW50cy9tZXRhLmpzIiwic291cmNlL3NjcmlwdHMvY29tcG9uZW50cy9ub3RpZmljYXRpb24uanMiLCJzb3VyY2Uvc2NyaXB0cy9jb21wb25lbnRzL3ByZWxvYWRlci5qcyIsInNvdXJjZS9zY3JpcHRzL2NvbXBvbmVudHMvc2VhcmNoLWZvcm0uanMiLCJzb3VyY2Uvc2NyaXB0cy9jb21wb25lbnRzL3VzZXIvY2FyZC5qcyIsInNvdXJjZS9zY3JpcHRzL2NvbXBvbmVudHMvdXNlci9yZXBvLmpzIiwic291cmNlL3NjcmlwdHMvY29tcG9uZW50cy91c2VyL3JlcG9zLmpzIiwic291cmNlL3NjcmlwdHMvY29uc3RhbnRzL2FjdGlvbnMvbm90aWZpY2F0aW9uLmpzIiwic291cmNlL3NjcmlwdHMvY29uc3RhbnRzL2FjdGlvbnMvdWkuanMiLCJzb3VyY2Uvc2NyaXB0cy9jb250YWluZXJzL2luZGV4LmpzIiwic291cmNlL3NjcmlwdHMvaW5kZXguanMiLCJzb3VyY2Uvc2NyaXB0cy9tb2R1bGVzL25vdGlmaWNhdGlvbnMuanMiLCJzb3VyY2Uvc2NyaXB0cy9tb2R1bGVzL3VpLmpzIiwic291cmNlL3NjcmlwdHMvbW9kdWxlcy91c2VyLmpzIiwic291cmNlL3NjcmlwdHMvcmVkdWNlcnMvaW5kZXguanMiLCJzb3VyY2Uvc2NyaXB0cy9yZWR1Y2Vycy9ub3RpZmljYXRpb24uanMiLCJzb3VyY2Uvc2NyaXB0cy9yZWR1Y2Vycy91aS5qcyIsInNvdXJjZS9zY3JpcHRzL3JvdXRlcy9pbmRleC5qcyIsInNvdXJjZS9zY3JpcHRzL3N0b3JlL2luZGV4LmpzIiwic291cmNlL3NjcmlwdHMvc3lzdGVtL2FqYXguanMiLCJzb3VyY2Uvc2NyaXB0cy9zeXN0ZW0vY29tbW9uLmpzIiwic291cmNlL3NjcmlwdHMvc3lzdGVtL3N0b3JlLmpzIiwic291cmNlL3NjcmlwdHMvdmlld3MvaG9tZS5qcyIsInNvdXJjZS9zY3JpcHRzL3ZpZXdzL2luZGV4LmpzIiwic291cmNlL3NjcmlwdHMvdmlld3MvdXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTs7OztBQUlBOzs7Ozs7OztBQUVBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNLE07OztBQUNGLG9CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwrR0FDVCxLQURTO0FBRWxCOzs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFRLElBQUcsVUFBWCxFQUFzQixXQUFVLGFBQWhDO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBRyxNQUFLLElBQVIsRUFBYSxXQUFVLFVBQXZCO0FBQ0ksNkRBQUcsV0FBVSxzQkFBYixHQURKO0FBRUk7QUFBQTtBQUFBLDhCQUFNLFdBQVUsZUFBaEI7QUFBQTtBQUFBLHlCQUZKO0FBR0k7QUFBQTtBQUFBLDhCQUFNLFdBQVUsZUFBaEI7QUFBQTtBQUFBO0FBSEoscUJBREo7QUFPSTtBQVBKO0FBREosYUFESjtBQWFIOzs7O0VBbkJnQixnQkFBTSxTOztrQkFzQlosTTs7O0FDaENmOzs7O0FBSUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNLEk7OztBQUNGLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDVCxLQURTO0FBRWxCOzs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFNLFdBQVUsYUFBaEI7QUFFUSxxQkFBSyxLQUFMLENBQVcsSUFBWCxHQUNNLHFDQUFHLFdBQVcsVUFBVSxLQUFLLEtBQUwsQ0FBVyxJQUFuQyxHQUROLEdBRU0sRUFKZDtBQU9RLHFCQUFLLEtBQUwsQ0FBVyxLQUFYLEdBQ007QUFBQTtBQUFBLHNCQUFNLFdBQVUsbUJBQWhCO0FBQXFDLHlCQUFLLEtBQUwsQ0FBVztBQUFoRCxpQkFETixHQUVNLEVBVGQ7QUFhUSxxQkFBSyxLQUFMLENBQVc7QUFibkIsYUFESjtBQWtCSDs7OztFQXhCYyxnQkFBTSxTOztrQkEyQlYsSTs7O0FDbkNmOzs7O0FBSUE7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sWTs7O0FBQ0YsMEJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNULEtBRFM7O0FBR2YsY0FBSyxLQUFMLEdBQWE7QUFDVCx1QkFBVztBQURGLFNBQWI7O0FBSUEsY0FBSyxJQUFMLEdBQWEsTUFBSyxJQUFMLENBQVUsSUFBVixPQUFiO0FBQ0EsY0FBSyxLQUFMLEdBQWEsTUFBSyxLQUFMLENBQVcsSUFBWCxPQUFiO0FBUmU7QUFTbEI7Ozs7NENBRW1CO0FBQ2hCLGlCQUFLLElBQUw7QUFDSDs7O2tEQUV5QixRLEVBQVU7QUFDaEMsZ0JBQUcsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxTQUFaLElBQXlCLFFBQTVCLEVBQXNDO0FBQ2xDLHFCQUFLLElBQUw7QUFDSDtBQUNKOzs7Z0NBRU87QUFDSixpQkFBSyxRQUFMLENBQWM7QUFDViwyQkFBVztBQURELGFBQWQ7O0FBSUEsZ0JBQUcsS0FBSyxLQUFMLENBQVcsT0FBZCxFQUF1QjtBQUNuQixxQkFBSyxLQUFMLENBQVcsT0FBWDtBQUNIOztBQUVELGlCQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CO0FBQ2hCLHNCQUFNO0FBRFUsYUFBcEI7QUFHSDs7OytCQUVNO0FBQ0gsaUJBQUssUUFBTCxDQUFjO0FBQ1YsMkJBQVc7QUFERCxhQUFkOztBQUlBLGdCQUFHLEtBQUssS0FBTCxDQUFXLE1BQWQsRUFBc0I7QUFDbEIscUJBQUssS0FBTCxDQUFXLE1BQVg7QUFDSDtBQUNKOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQ0g7QUFBQTtBQUFBLGtCQUFLLFdBQVcsMEJBQVcsY0FBWCxFQUEyQixLQUFLLEtBQUwsQ0FBVyxTQUF0QyxDQUFoQjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLHNCQUFmO0FBRVEseUJBQUssS0FBTCxDQUFXLEtBQVgsR0FDTTtBQUFBO0FBQUEsMEJBQUksV0FBVSw0QkFBZDtBQUE0Qyw2QkFBSyxLQUFMLENBQVc7QUFBdkQscUJBRE4sR0FFTSxFQUpkO0FBT0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsMkJBQWY7QUFFUSw2QkFBSyxLQUFMLENBQVcsT0FBWCxHQUVDLFlBQU07QUFDSCxnQ0FBSSxVQUFVLE9BQUssS0FBTCxDQUFXLE9BQXpCOztBQUVBLG1DQUNJLDhCQUFDLE9BQUQsT0FESjtBQUdILHlCQU5ELEVBRkEsR0FTTSxLQUFLLEtBQUwsQ0FBVztBQVh6QixxQkFQSjtBQXNCUSx5QkFBSyxLQUFMLENBQVcsUUFBWCxHQUNNO0FBQUE7QUFBQSwwQkFBRyxXQUFXLDBCQUFXLG9CQUFYLENBQWQsRUFBZ0QsU0FBUyxLQUFLLEtBQTlEO0FBQUE7QUFBQSxxQkFETixHQUVNO0FBeEJkO0FBREosYUFERyxHQStCRCxLQS9CTjtBQWdDSDs7OztFQS9Fc0IsZ0JBQU0sUzs7QUFrRmpDLGFBQWEsU0FBYixHQUF5QjtBQUNyQixlQUFXLGdCQUFNLFNBQU4sQ0FBZ0IsTUFETjtBQUVyQixXQUFXLGdCQUFNLFNBQU4sQ0FBZ0IsTUFGTjtBQUdyQixjQUFXLGdCQUFNLFNBQU4sQ0FBZ0I7QUFITixDQUF6Qjs7QUFNQSxhQUFhLFlBQWIsR0FBNEI7QUFDeEIsV0FBVSxFQURjO0FBRXhCLGNBQVU7QUFGYyxDQUE1Qjs7a0JBS2UsMkJBQVUsWUFBVixDOzs7QUN2R2Y7Ozs7QUFJQTs7Ozs7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxTOzs7QUFDRix1QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUhBQ1QsS0FEUztBQUVsQjs7OztpQ0FFUTtBQUNMLG1CQUNJLHVDQUFLLFdBQVcsMEJBQVcsV0FBWCxFQUF3QjtBQUNwQyx1Q0FBbUIsS0FBSyxLQUFMLENBQVcsRUFBWCxLQUFrQixXQUREO0FBRXBDLHFDQUFtQixLQUFLLEtBQUwsQ0FBVyxFQUFYLEtBQWtCO0FBRkQsaUJBQXhCLENBQWhCLEdBREo7QUFNSDs7OztFQVptQixnQkFBTSxTOztBQWU5QixJQUFNLG1CQUFtQixTQUFuQixnQkFBbUIsQ0FBQyxLQUFEO0FBQUEsV0FBWTtBQUNqQyxZQUFJLE1BQU0sRUFBTixDQUFTO0FBRG9CLEtBQVo7QUFBQSxDQUF6Qjs7a0JBSWUseUJBQVEsZ0JBQVIsRUFBMEIsU0FBMUIsQzs7O0FDN0JmOzs7O0FBSUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNLFc7OztBQUNGLHlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDVCxLQURTOztBQUdmLGNBQUssTUFBTCxHQUFjLE1BQUssTUFBTCxDQUFZLElBQVosT0FBZDtBQUhlO0FBSWxCOzs7OytCQUVNLEMsRUFBRztBQUNOLGNBQUUsY0FBRjs7QUFFQSxnQkFBSSxJQUFJLEtBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxhQUFmLENBQTZCLElBQTdCLENBQVI7O0FBRUEsZ0JBQUcsRUFBRSxLQUFGLENBQVEsTUFBUixHQUFpQixDQUFwQixFQUF1QjtBQUNuQixxQkFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixJQUFwQixDQUF5QjtBQUNyQiw4QkFBVSxNQUFNLEVBQUU7QUFERyxpQkFBekI7QUFHSDtBQUNKOzs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQU0sS0FBSSxNQUFWLEVBQWlCLFVBQVUsS0FBSyxNQUFoQyxFQUF3QyxXQUFVLGFBQWxEO0FBQ0k7QUFBQTtBQUFBLHNCQUFPLFdBQVUsbUJBQWpCO0FBQ0ksNkRBQU8sTUFBSyxRQUFaLEVBQXFCLE1BQUssR0FBMUIsRUFBOEIsSUFBRyxHQUFqQyxFQUFxQyxXQUFVLFdBQS9DLEVBQTJELGFBQVksMEJBQXZFLEdBREo7QUFFSSx5REFBRyxXQUFVLGFBQWI7QUFGSjtBQURKLGFBREo7QUFRSDs7OztFQTVCcUIsZ0JBQU0sUzs7QUErQmhDLFlBQVksWUFBWixHQUEyQjtBQUN2QixZQUFRLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUI7QUFEUixDQUEzQjs7a0JBSWUsVzs7O0FDM0NmOzs7O0FBSUE7Ozs7Ozs7O0FBRUE7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRU0sUTs7O0FBQ0Ysc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNULEtBRFM7QUFFbEI7Ozs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsYUFBZjtBQUNJLDJEQUFLLEtBQUssS0FBSyxLQUFMLENBQVcsVUFBckIsRUFBaUMsS0FBSyxLQUFLLEtBQUwsQ0FBVyxJQUFqRCxFQUF1RCxXQUFVLG1CQUFqRTtBQURKLGlCQURKO0FBSUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSSxXQUFVLFdBQWQ7QUFDSTtBQUFBO0FBQUEsOEJBQUcsTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUFwQixFQUE4QixRQUFPLFFBQXJDO0FBQStDLGlDQUFLLEtBQUwsQ0FBVztBQUExRDtBQURKLHFCQURKO0FBSUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsV0FBZjtBQUNJLHdFQUFNLE1BQUssT0FBWCxFQUFtQixPQUFPLGVBQWUsOEJBQWlCLEtBQUssS0FBTCxDQUFXLFVBQTVCLENBQXpDLEdBREo7QUFFSSx3RUFBTSxNQUFLLFVBQVgsRUFBc0IsT0FBTyxLQUFLLEtBQUwsQ0FBVyxRQUF4QyxHQUZKO0FBR0ksd0VBQU0sTUFBSyxRQUFYLEVBQW9CLE9BQU8sS0FBSyxLQUFMLENBQVcsWUFBWCxHQUEwQixpQkFBckQsR0FISjtBQUlJLHdFQUFNLE1BQUssUUFBWCxFQUFvQixPQUFPLEtBQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIsY0FBbEQ7QUFKSjtBQUpKO0FBSkosYUFESjtBQWtCSDs7OztFQXhCa0IsZ0JBQU0sUzs7a0JBMkJkLFE7OztBQ3ZDZjs7OztBQUlBOzs7Ozs7OztBQUVBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNLEk7OztBQUNGLGtCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwyR0FDUixLQURRO0FBRWpCOzs7O2lDQUVPO0FBQ0osbUJBQ0k7QUFBQTtBQUFBLGtCQUFJLFdBQVUsV0FBZDtBQUNJO0FBQUE7QUFBQSxzQkFBRyxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQXBCLEVBQThCLFdBQVUsZ0JBQXhDLEVBQXlELFFBQU8sUUFBaEU7QUFDSyx5QkFBSyxLQUFMLENBQVcsSUFEaEI7QUFFSSx5REFBRyxXQUFVLG9CQUFiO0FBRkosaUJBREo7QUFNSTtBQUFBO0FBQUEsc0JBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFJLDZCQUFLLEtBQUwsQ0FBVztBQUFmO0FBREosaUJBTko7QUFVSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUVRLHlCQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLElBQXhCLEdBQ00sZ0RBQU0sT0FBTyxLQUFLLEtBQUwsQ0FBVyxRQUF4QixHQUROLEdBRU0sRUFKZDtBQU1JLG9FQUFNLE1BQUssYUFBWCxFQUF5QixPQUFNLE9BQS9CLEVBQXVDLE9BQU8sS0FBSyxLQUFMLENBQVcsV0FBekQsR0FOSjtBQU9JLG9FQUFNLE1BQUssTUFBWCxFQUFrQixPQUFNLE1BQXhCLEVBQStCLE9BQU8sS0FBSyxLQUFMLENBQVcsZ0JBQWpELEdBUEo7QUFRSSxvRUFBTSxNQUFLLEtBQVgsRUFBaUIsT0FBTSxVQUF2QixFQUFrQyxPQUFPLEtBQUssS0FBTCxDQUFXLGNBQXBEO0FBUko7QUFWSixhQURKO0FBdUJIOzs7O0VBN0JjLGdCQUFNLFM7O2tCQWdDVixJOzs7QUMxQ2Y7Ozs7QUFJQTs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sUzs7O0FBQ0YsdUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNULEtBRFM7O0FBR2YsY0FBSyxLQUFMLEdBQWE7QUFDVCxtQkFBTyxFQURFO0FBRVQsc0JBQVUsRUFGRDtBQUdULHlCQUFhO0FBSEosU0FBYjtBQUhlO0FBUWxCOzs7OzRDQUVtQjtBQUNoQixpQkFBSyxTQUFMLENBQWUsS0FBSyxLQUFMLENBQVcsS0FBMUI7QUFDSDs7O2tEQUV5QixRLEVBQVU7QUFDaEMsZ0JBQUcsU0FBUyxLQUFULEtBQW1CLEtBQUssS0FBTCxDQUFXLEtBQWpDLEVBQXdDO0FBQ3BDLHFCQUFLLFNBQUwsQ0FBZSxTQUFTLEtBQXhCO0FBQ0g7QUFDSjs7O2tDQUVTLFEsRUFBVTtBQUFBOztBQUNoQix5QkFBRyxZQUFIOztBQUVBLG9DQUFhLFFBQWIsRUFBdUIsVUFBQyxRQUFELEVBQWM7QUFDakMsb0JBQUcsU0FBUyxNQUFULEtBQW9CLFNBQXZCLEVBQWtDO0FBQzlCLDJCQUFLLFFBQUwsQ0FBYztBQUNWLCtCQUFPLFNBQVMsT0FETjtBQUVWLGtDQUFVLFNBQVMsT0FBVCxDQUFpQixNQUFqQixDQUF3QixnQkFBUTtBQUFFLG1DQUFPLENBQUMsS0FBSyxJQUFiO0FBQWtCLHlCQUFwRCxDQUZBO0FBR1YscUNBQWEsU0FBUyxPQUFULENBQWlCLE1BQWpCLENBQXdCLGdCQUFRO0FBQUUsbUNBQU8sS0FBSyxJQUFaO0FBQWlCLHlCQUFuRDtBQUhILHFCQUFkO0FBS0gsaUJBTkQsTUFRSztBQUNELDRDQUFjLFdBQWQsQ0FBMEIsU0FBUyxPQUFULENBQWlCLFVBQTNDO0FBQ0g7O0FBRUQsNkJBQUcsV0FBSDtBQUNILGFBZEQ7QUFlSDs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsMEJBQVcsb0JBQVgsRUFBaUMsRUFBQyxhQUFhLENBQUMsS0FBSyxLQUFMLENBQVcsRUFBMUIsRUFBakMsQ0FBaEI7QUFFUSxxQkFBSyxLQUFMLENBQVcsWUFBWCxHQUEwQixDQUExQixHQUVBO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFJLFdBQVUsc0JBQWQ7QUFBQTtBQUFBLHFCQURKO0FBRUk7QUFBQTtBQUFBLDBCQUFJLFdBQVUsWUFBZDtBQUVRLDZCQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLFVBQUMsSUFBRCxFQUFVO0FBQzlCLG1DQUFPLHlEQUFNLEtBQUssS0FBSyxFQUFoQixJQUF3QixJQUF4QixFQUFQO0FBQ0gseUJBRkQ7QUFGUixxQkFGSjtBQVVJO0FBQUE7QUFBQSwwQkFBSSxXQUFVLHNCQUFkO0FBQUE7QUFBQSxxQkFWSjtBQVdJO0FBQUE7QUFBQSwwQkFBSSxXQUFVLFlBQWQ7QUFFUSw2QkFBSyxLQUFMLENBQVcsV0FBWCxDQUF1QixHQUF2QixDQUEyQixVQUFDLElBQUQsRUFBVTtBQUNqQyxtQ0FBTyx5REFBTSxLQUFLLEtBQUssRUFBaEIsSUFBd0IsSUFBeEIsRUFBUDtBQUNILHlCQUZEO0FBRlI7QUFYSixpQkFGQSxHQXNCQTtBQUFBO0FBQUEsc0JBQWMsV0FBVSxtQkFBeEIsRUFBNEMsVUFBVSxLQUF0RDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQXhCUixhQURKO0FBK0JIOzs7O0VBekVtQixnQkFBTSxTOztrQkE0RWYsUzs7O0FDNUZmOzs7O0FBSUE7Ozs7OztBQUVBOztrQkFFZSw0QkFDWCxtQkFEVyxFQUVYLG1CQUZXLEM7OztBQ1JmOzs7O0FBSUE7Ozs7OztBQUVBOztrQkFFZSw0QkFDWCxZQURXLEVBRVgsV0FGVyxFQUdYLGdCQUhXLEVBSVgsbUJBSlcsQzs7O0FDUmY7Ozs7QUFJQTs7Ozs7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxROzs7QUFDRixzQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1QsS0FEUzs7QUFHZixjQUFLLEtBQUwsR0FBYSxFQUFiO0FBSGU7QUFJbEI7Ozs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVywwQkFBVyxXQUFYLEVBQXdCLEtBQUssS0FBTCxDQUFXLFNBQW5DLENBQWhCO0FBRVEscUJBQUssS0FBTCxDQUFXLFNBQVgsS0FBeUIsTUFBekIsR0FDTSxxREFETixHQUVNLEVBSmQ7QUFNSSx3RUFOSjtBQU9JO0FBQUE7QUFBQSxzQkFBSyxJQUFHLE1BQVIsRUFBZSxXQUFVLHFCQUF6QjtBQUVRLHlCQUFLLEtBQUwsQ0FBVyxnQkFBWCxHQUNNLHNEQUFrQixLQUFLLEtBQUwsQ0FBVyxZQUE3QixDQUROLEdBRU0sRUFKZDtBQU1LLHlCQUFLLEtBQUwsQ0FBVztBQU5oQjtBQVBKLGFBREo7QUFrQkg7Ozs7RUExQmtCLGdCQUFNLFM7O0FBNkI3QixJQUFNLG1CQUFtQixTQUFuQixnQkFBbUIsQ0FBQyxLQUFEO0FBQUEsV0FBWTtBQUNqQyxZQUFrQixNQUFNLEVBQU4sQ0FBUyxFQURNO0FBRWpDLG1CQUFrQixNQUFNLEVBQU4sQ0FBUyxTQUZNO0FBR2pDLHNCQUFrQixNQUFNLFlBQU4sQ0FBbUIsWUFISjtBQUlqQywwQkFBa0IsTUFBTSxZQUFOLENBQW1CO0FBSkosS0FBWjtBQUFBLENBQXpCOztrQkFPZSx5QkFBUSxnQkFBUixFQUEwQixRQUExQixDOzs7QUNsRGY7Ozs7QUFJQTs7QUFFQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTSxPQUFPLFNBQVAsSUFBTztBQUFBLFFBQUUsS0FBRixRQUFFLEtBQUY7QUFBQSxXQUNUO0FBQUE7QUFBQSxVQUFVLE9BQU8sS0FBakI7QUFDSTtBQUFBO0FBQUEsY0FBUSxpQ0FBUjtBQUFBO0FBQUE7QUFESixLQURTO0FBQUEsQ0FBYjs7QUFRQSxzQkFBTyw4QkFBQyxJQUFELElBQU0sbUJBQU4sR0FBUCxFQUErQixTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBL0I7OztBQ3RCQTs7OztBQUlBOzs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBLElBQU0sZUFBZSxTQUFmLFlBQWUsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFtQjtBQUNwQyxpQkFBTSxRQUFOLENBQWU7QUFDWCxjQUFTLG1CQURFO0FBRVgsaUJBQVM7QUFDTCx1QkFBVyxJQUROO0FBRUwscUJBQVcsT0FGTjtBQUdMLHNCQUFXO0FBSE47QUFGRSxLQUFmO0FBUUgsQ0FURDs7QUFXQSxJQUFNLHNCQUFzQixTQUF0QixtQkFBc0IsQ0FBQyxPQUFELEVBQWE7QUFDckMsV0FBTyxhQUFhLHNCQUFiLEVBQXFDLE9BQXJDLENBQVA7QUFDSCxDQUZEOztBQUlBLElBQU0sb0JBQW9CLFNBQXBCLGlCQUFvQixDQUFDLE9BQUQsRUFBYTtBQUNuQyxXQUFPLGFBQWEsb0JBQWIsRUFBbUMsT0FBbkMsQ0FBUDtBQUNILENBRkQ7O0FBSU8sSUFBTSw4Q0FBbUIsU0FBbkIsZ0JBQW1CLEdBQU07QUFDbEMsaUJBQU0sUUFBTixDQUFlO0FBQ1gsY0FBTTtBQURLLEtBQWY7QUFHSCxDQUpNOztBQU1BLElBQU0sc0NBQWUsU0FBZixZQUFlLENBQUMsUUFBRCxFQUFjO0FBQ3RDLFFBQUksVUFBVSxTQUFWLE9BQVUsR0FBTTtBQUNoQixlQUNJO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQUE7QUFBQTtBQUFTO0FBQVQsYUFBaEM7QUFBQTtBQUFBLFNBREo7QUFJSCxLQUxEOztBQU9BLHdCQUFvQixPQUFwQjtBQUNILENBVE07O0FBV0EsSUFBTSxvQ0FBYyxTQUFkLFdBQWMsQ0FBQyxLQUFELEVBQVc7QUFDbEMsUUFBSSxVQUFVLFNBQVYsT0FBVSxHQUFNO0FBQ2hCLGVBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBaUIseURBQWpCO0FBQUE7QUFBeUI7QUFBekI7QUFGSixTQURKO0FBTUgsS0FQRDs7QUFTQSxzQkFBa0IsT0FBbEI7QUFDSCxDQVhNOztrQkFhUTtBQUNYLHNDQURXO0FBRVgsNEJBRlc7QUFHWDtBQUhXLEM7OztBQzFEZjs7OztBQUlBOzs7Ozs7O0FBRUE7O0FBRU8sSUFBTSxzQ0FBZSxTQUFmLFlBQWUsR0FBTTtBQUM5QixpQkFBTSxRQUFOLENBQWU7QUFDWCxjQUFNO0FBREssS0FBZjtBQUdILENBSk07O0FBTUEsSUFBTSxvQ0FBYyxTQUFkLFdBQWMsR0FBTTtBQUM3QixpQkFBTSxRQUFOLENBQWU7QUFDWCxjQUFNO0FBREssS0FBZjtBQUdILENBSk07O0FBTUEsSUFBTSxzQ0FBZSxTQUFmLFlBQWUsQ0FBQyxTQUFELEVBQWU7QUFDdkMsaUJBQU0sUUFBTixDQUFlO0FBQ1gsY0FBUyxnQkFERTtBQUVYLGlCQUFTO0FBQ0wsdUJBQVc7QUFETjtBQUZFLEtBQWY7QUFNSCxDQVBNOztrQkFTUTtBQUNYLDhCQURXO0FBRVgsNEJBRlc7QUFHWDtBQUhXLEM7OztBQzdCZjs7OztBQUlBOzs7Ozs7O0FBRUE7O0FBRU8sSUFBTSw0QkFBVSxTQUFWLE9BQVUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUF3QjtBQUMzQyxRQUFJLE9BQU8sVUFBVSxRQUFWLENBQVg7O0FBRUEsd0JBQVMsa0NBQWtDLElBQTNDLEVBQWlELFFBQWpEO0FBQ0gsQ0FKTTs7QUFNQSxJQUFNLHNDQUFlLFNBQWYsWUFBZSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXdCO0FBQ2hELFFBQUksT0FBTyxVQUFVLFFBQVYsQ0FBWDs7QUFFQSx3QkFBUyxrQ0FBa0MsSUFBbEMsR0FBeUMsUUFBbEQsRUFBNEQsUUFBNUQ7QUFDSCxDQUpNOzs7QUNkUDs7OztBQUlBOzs7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsNEJBQWdCO0FBQzNCLGtCQUQyQjtBQUUzQjtBQUYyQixDQUFoQixDOzs7QUNWZjs7OztBQUlBOzs7Ozs7OztBQUVBOztBQUNBOztJQUFZLG1COzs7Ozs7QUFFWixJQUFNLGVBQWU7QUFDakIsa0JBQWtCLEVBREQ7QUFFakIsc0JBQWtCO0FBRkQsQ0FBckI7O2tCQUtlLDBCQUFjLFlBQWQsd0RBQ1Ysb0JBQW9CLE9BQXBCLENBQTRCLGlCQURsQixFQUNzQyxVQUFDLEtBQUQsRUFBUSxPQUFSLEVBQW9CO0FBQ2pFLFdBQU8sT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFsQixFQUF5QjtBQUM1QixzQkFBa0IsT0FEVTtBQUU1QiwwQkFBa0I7QUFGVSxLQUF6QixDQUFQO0FBSUgsQ0FOVSxtQ0FPVixvQkFBb0IsT0FBcEIsQ0FBNEIsaUJBUGxCLEVBT3NDLFVBQUMsS0FBRCxFQUFXO0FBQ3hELFdBQU8sT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFsQixFQUF5QjtBQUM1QixzQkFBa0IsRUFEVTtBQUU1QiwwQkFBa0I7QUFGVSxLQUF6QixDQUFQO0FBSUgsQ0FaVSxtQjs7O0FDZGY7Ozs7QUFJQTs7Ozs7Ozs7QUFFQTs7QUFDQTs7SUFBWSxTOzs7Ozs7QUFFWixJQUFNLGVBQWU7QUFDakIsUUFBVyxFQURNO0FBRWpCLGVBQVc7QUFGTSxDQUFyQjs7a0JBS2UsMEJBQWMsWUFBZCx3REFDVixVQUFVLE9BQVYsQ0FBa0IsVUFEUixFQUNxQixVQUFDLEtBQUQsRUFBVztBQUN2QyxXQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUI7QUFDNUIsWUFBSTtBQUR3QixLQUF6QixDQUFQO0FBR0gsQ0FMVSxtQ0FNVixVQUFVLE9BQVYsQ0FBa0IsU0FOUixFQU1xQixVQUFDLEtBQUQsRUFBVztBQUN2QyxXQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUI7QUFDNUIsWUFBSTtBQUR3QixLQUF6QixDQUFQO0FBR0gsQ0FWVSxtQ0FXVixVQUFVLE9BQVYsQ0FBa0IsY0FYUixFQVcrQixVQUFDLEtBQUQsRUFBUSxPQUFSLEVBQW9CO0FBQzFELFdBQU8sT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFsQixFQUF5QjtBQUM1QixtQkFBVyxRQUFRO0FBRFMsS0FBekIsQ0FBUDtBQUdILENBZlUsbUNBZ0JWLFVBQVUsT0FBVixDQUFrQixpQkFoQlIsRUFnQitCLFVBQUMsS0FBRCxFQUFXO0FBQ2pELFdBQU8sT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFsQixFQUF5QjtBQUM1QixtQkFBVztBQURpQixLQUF6QixDQUFQO0FBR0gsQ0FwQlUsbUI7OztBQ2RmOzs7O0FBSUE7Ozs7Ozs7QUFFQTs7OztBQUNBOztBQUVBOzs7O0FBRUE7O0lBQVksSzs7Ozs7O0FBRUwsSUFBTSwwQkFDVDtBQUFBO0FBQUEsTUFBTywrQkFBUDtBQUNJLDZEQUFZLFdBQVcsTUFBTSxJQUE3QixHQURKO0FBRUksd0RBQU8sTUFBSyxHQUFaLEVBQWdCLFdBQVcsTUFBTSxJQUFqQyxHQUZKO0FBR0ksd0RBQU8sTUFBSyxRQUFaLEVBQXFCLFlBQVksTUFBTSxJQUF2QztBQUhKLENBREc7OztBQ2JQOzs7O0FBSUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTSx3QkFBUSwyQ0FBZDs7O0FDVFA7Ozs7QUFJQTs7Ozs7O1FBSWdCLEssR0FBQSxLOztBQUZoQjs7QUFFTyxTQUFTLEtBQVQsQ0FBZSxHQUFmLEVBQW9CO0FBQ3ZCLFFBQUksT0FBTyxTQUFQLElBQU8sQ0FBUyxNQUFULEVBQWlCLEdBQWpCLEVBQXNCLElBQXRCLEVBQTRCOztBQUVuQyxZQUFJLFVBQVUsSUFBSSxPQUFKLENBQVksVUFBUyxPQUFULEVBQWtCLE1BQWxCLEVBQTBCO0FBQ2hELGdCQUFJLFVBQWMsSUFBSSxjQUFKLEVBQWxCO0FBQUEsZ0JBQ0ksTUFBYyxHQURsQjtBQUFBLGdCQUVJLFdBQWMsRUFGbEI7QUFBQSxnQkFHSSxjQUFjLGlDQUhsQjs7QUFLQSxnQkFBRyxRQUFRLFdBQVcsS0FBdEIsRUFBNkI7QUFDekIsdUJBQU8sR0FBUDtBQUNBLG9CQUFJLFdBQVcsQ0FBZjtBQUNBLHFCQUFJLElBQUksR0FBUixJQUFlLElBQWYsRUFBcUI7QUFDakIsd0JBQUcsS0FBSyxjQUFMLENBQW9CLEdBQXBCLENBQUgsRUFBNkI7QUFDekIsNEJBQUcsVUFBSCxFQUFlO0FBQ1gsbUNBQU8sR0FBUDtBQUNIO0FBQ0QsK0JBQU8sbUJBQW1CLEdBQW5CLElBQTBCLEdBQTFCLEdBQWdDLG1CQUFtQixLQUFLLEdBQUwsQ0FBbkIsQ0FBdkM7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsb0JBQVEsSUFBUixDQUFhLE1BQWIsRUFBcUIsR0FBckI7QUFDQSxvQkFBUSxnQkFBUixDQUF5QixjQUF6QixFQUF5QyxXQUF6Qzs7QUFFQSxvQkFBUSxNQUFSLEdBQWlCLFlBQVc7QUFDeEIsb0JBQUcsS0FBSyxNQUFMLElBQWUsR0FBZixJQUFzQixLQUFLLE1BQUwsR0FBYyxHQUF2QyxFQUE0QztBQUN4Qyx3QkFBSSxXQUFXLEtBQUssUUFBcEI7O0FBRUEsNEJBQVEsc0JBQVMsUUFBVCxDQUFSO0FBQ0gsaUJBSkQsTUFJTztBQUNILDJCQUFPO0FBQ0gsZ0NBQWtCLEtBQUssTUFEcEI7QUFFSCxvQ0FBa0IsS0FBSyxVQUZwQjtBQUdILGtDQUFrQixzQkFBUyxLQUFLLFFBQWQsQ0FIZjtBQUlILDBDQUFrQjtBQUpmLHFCQUFQO0FBTUg7QUFDSixhQWJEOztBQWVBLG9CQUFRLE9BQVIsR0FBa0IsWUFBVztBQUN6Qix1QkFBTztBQUNILDRCQUFrQixLQUFLLE1BRHBCO0FBRUgsZ0NBQWtCLEtBQUssVUFGcEI7QUFHSCw4QkFBa0Isc0JBQVMsS0FBSyxRQUFkLENBSGY7QUFJSCxzQ0FBa0I7QUFKZixpQkFBUDtBQU1ILGFBUEQ7O0FBU0Esb0JBQVEsSUFBUixDQUFhLFFBQWI7QUFDSCxTQS9DYSxDQUFkOztBQWlEQSxlQUFPLE9BQVA7QUFDSCxLQXBERDs7QUFzREEsV0FBTztBQUNILGVBQVUsYUFBUyxJQUFULEVBQWUsT0FBZixFQUF3QjtBQUM5QixtQkFBTyxLQUFLLEtBQUwsRUFBWSxHQUFaLEVBQWlCLElBQWpCLEVBQXVCLE9BQXZCLENBQVA7QUFDSCxTQUhFO0FBSUgsZ0JBQVUsY0FBUyxJQUFULEVBQWUsT0FBZixFQUF3QjtBQUM5QixtQkFBTyxLQUFLLE1BQUwsRUFBYSxHQUFiLEVBQWtCLElBQWxCLEVBQXdCLE9BQXhCLENBQVA7QUFDSCxTQU5FO0FBT0gsZUFBVSxhQUFTLElBQVQsRUFBZSxPQUFmLEVBQXdCO0FBQzlCLG1CQUFPLEtBQUssS0FBTCxFQUFZLEdBQVosRUFBaUIsSUFBakIsRUFBdUIsT0FBdkIsQ0FBUDtBQUNILFNBVEU7QUFVSCxrQkFBVSxpQkFBUyxJQUFULEVBQWUsT0FBZixFQUF3QjtBQUM5QixtQkFBTyxLQUFLLFFBQUwsRUFBZSxHQUFmLEVBQW9CLElBQXBCLEVBQTBCLE9BQTFCLENBQVA7QUFDSDtBQVpFLEtBQVA7QUFjSDs7QUFFTSxJQUFNLDhCQUFXLFNBQVgsUUFBVyxDQUFDLEdBQUQsRUFBTSxRQUFOLEVBQW1CO0FBQ3ZDLFVBQU0sR0FBTixFQUNLLEdBREwsR0FFSyxJQUZMLENBRVUsVUFBQyxRQUFELEVBQWM7QUFDaEIsaUJBQVM7QUFDTCxvQkFBUyxTQURKO0FBRUwscUJBQVM7QUFGSixTQUFUO0FBSUgsS0FQTCxFQVFLLEtBUkwsQ0FRVyxVQUFDLFFBQUQsRUFBYztBQUNqQixpQkFBUztBQUNMLG9CQUFTLE9BREo7QUFFTCxxQkFBUztBQUZKLFNBQVQ7QUFJSCxLQWJMO0FBY0gsQ0FmTTs7O0FDL0VQOzs7O0FBSUE7Ozs7O0FBRU8sSUFBTSw4QkFBVyxTQUFYLFFBQVcsQ0FBQyxHQUFELEVBQVM7QUFDN0IsUUFBSTtBQUNBLGVBQU8sS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFQO0FBQ0gsS0FGRCxDQUdBLE9BQU0sQ0FBTixFQUFTO0FBQ0wsZUFBTyxHQUFQO0FBQ0g7QUFDSixDQVBNOztBQVNBLElBQU0sOENBQW1CLFNBQW5CLGdCQUFtQixDQUFDLElBQUQsRUFBVTtBQUN0QyxRQUFJLFFBQVEsSUFBSSxJQUFKLENBQVMsSUFBVCxDQUFaOztBQUVBLFdBQU8sTUFBTSxZQUFOLEVBQVA7QUFDSCxDQUpNOzs7QUNmUDs7OztBQUlBOzs7OztRQUVnQixlLEdBQUEsZTtRQU9BLGEsR0FBQSxhO0FBUFQsU0FBUyxlQUFULEdBQXVDO0FBQUEsc0NBQVgsU0FBVztBQUFYLGlCQUFXO0FBQUE7O0FBQzFDLFdBQU8sVUFBVSxNQUFWLENBQWlCLFVBQUMsR0FBRCxFQUFNLFFBQU4sRUFBbUI7QUFDdkMsWUFBSSxRQUFKLElBQWdCLFFBQWhCO0FBQ0EsZUFBTyxHQUFQO0FBQ0gsS0FITSxFQUdKLEVBSEksQ0FBUDtBQUlIOztBQUVNLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxVQUFyQyxFQUFpRDtBQUNwRCxXQUFPLFlBQWtDO0FBQUEsWUFBakMsS0FBaUMsdUVBQXpCLFlBQXlCO0FBQUEsWUFBWCxNQUFXOztBQUNyQyxZQUFNLFVBQVUsV0FBVyxPQUFPLElBQWxCLENBQWhCOztBQUVBLGVBQU8sVUFDRCxRQUFRLEtBQVIsRUFBZSxPQUFPLE9BQXRCLENBREMsR0FFRCxLQUZOO0FBR0gsS0FORDtBQU9IOzs7QUNyQkQ7Ozs7QUFJQTs7Ozs7Ozs7QUFFQTs7OztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFFTSxJOzs7QUFDRixrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMkdBQ1QsS0FEUztBQUVsQjs7Ozs0Q0FFbUI7QUFDaEIsaUJBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0I7QUFDaEIsc0JBQVMsZ0JBRE87QUFFaEIseUJBQVM7QUFDTCwrQkFBVztBQUROO0FBRk8sYUFBcEI7QUFNSDs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsY0FBZjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFNBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUksV0FBVSxrQkFBZDtBQUFBO0FBQUEscUJBREo7QUFJSTtBQUFBO0FBQUEsMEJBQUksV0FBVSxrQkFBZDtBQUFBO0FBQUEscUJBSko7QUFLSTtBQUxKO0FBREosYUFESjtBQVdIOzs7O0VBMUJjLGdCQUFNLFM7O2tCQTZCViwyQkFBVSxJQUFWLEM7OztBQ3hDZjs7OztBQUlBOzs7Ozs7O0FBRUE7Ozs7QUFFQTs7Ozs7O1FBRGlCLEk7UUFFQSxJOzs7QUNUakI7Ozs7QUFJQTs7Ozs7Ozs7QUFFQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxJOzs7QUFDRixrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1QsS0FEUzs7QUFHZixjQUFLLEtBQUwsR0FBYTtBQUNULGtCQUFNO0FBREcsU0FBYjtBQUhlO0FBTWxCOzs7OzRDQUVtQjtBQUNoQix5QkFBRyxZQUFILENBQWdCLE1BQWhCOztBQUVBLGlCQUFLLFFBQUwsQ0FBYyxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLElBQWhDO0FBQ0g7OztrREFFeUIsUSxFQUFVO0FBQ2hDLGdCQUFHLFNBQVMsTUFBVCxLQUFvQixLQUFLLEtBQUwsQ0FBVyxNQUFsQyxFQUEwQztBQUN0QyxxQkFBSyxRQUFMLENBQWMsU0FBUyxNQUFULENBQWdCLElBQTlCO0FBQ0g7QUFDSjs7O2lDQUVRLEksRUFBTTtBQUFBOztBQUNYLHlCQUFHLFlBQUg7O0FBRUEsK0JBQVEsSUFBUixFQUFjLFVBQUMsUUFBRCxFQUFjO0FBQ3hCLG9CQUFHLFNBQVMsTUFBVCxLQUFvQixTQUF2QixFQUFrQztBQUM5Qiw0Q0FBYyxnQkFBZDs7QUFFQSwyQkFBSyxRQUFMLENBQWM7QUFDViw4QkFBTSxTQUFTO0FBREwscUJBQWQ7QUFHSCxpQkFORCxNQU9LO0FBQ0QsMkJBQUssUUFBTCxDQUFjO0FBQ1YsOEJBQU07QUFESSxxQkFBZDs7QUFJQSx3QkFBRyxTQUFTLE9BQVQsQ0FBaUIsTUFBakIsS0FBNEIsR0FBL0IsRUFBb0M7QUFDaEMsZ0RBQWMsWUFBZCxDQUEyQixJQUEzQjtBQUNILHFCQUZELE1BSUs7QUFDRCxnREFBYyxXQUFkLENBQTBCLFNBQVMsT0FBVCxDQUFpQixVQUEzQztBQUNIO0FBQ0o7QUFDSixhQXJCRDs7QUF1QkEseUJBQUcsV0FBSDtBQUNIOzs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxjQUFmO0FBRVEscUJBQUssS0FBTCxDQUFXLElBQVgsR0FDTSw4Q0FBYyxLQUFLLEtBQUwsQ0FBVyxJQUF6QixDQUROLEdBRU0sRUFKZDtBQU9RLHFCQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQ00sK0NBQWUsS0FBSyxLQUFMLENBQVcsSUFBMUIsQ0FETixHQUVNO0FBVGQsYUFESjtBQWNIOzs7O0VBakVjLGdCQUFNLFM7O2tCQW9FViwyQkFBVSxJQUFWLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvKipcbiAqIEBhdXRob3IgQmlsYWwgQ2luYXJsaVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2gtZm9ybSc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXIgaWQ9XCJtYXN0aGVhZFwiIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi4vXCIgY2xhc3NOYW1lPVwiYnJhbmRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tb2N0b2NhdCBpY29uLTJ4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyYW5kaW5nLW5hbWVcIj5HaXRseTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyYW5kaW5nLWluZm9cIj5hIHNpbXBsZSByZWFjdCBhcHA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCIvKipcbiAqIEBhdXRob3IgQmlsYWwgQ2luYXJsaVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTWV0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpbmdsZS1tZXRhXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmljb25cbiAgICAgICAgICAgICAgICAgICAgICAgID8gPGkgY2xhc3NOYW1lPXsnaWNvbi0nICsgdGhpcy5wcm9wcy5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPVwic2luZ2xlLW1ldGEtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXRhOyIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgTm90aWZpY2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9wZW4gID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuaXNWaXNpYmxlICYmIG5ld1Byb3BzKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYodGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ0hJREVfTk9USUZJQ0FUSU9OJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZih0aGlzLnByb3BzLm9uT3Blbikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNWaXNpYmxlID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ25vdGlmaWNhdGlvbicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8aDMgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWNvbnRlbnQtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWNvbnRlbnQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IENvbnRlbnQgPSB0aGlzLnByb3BzLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGEgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdub3RpZmljYXRpb24tY2xvc2UnKX0gb25DbGljaz17dGhpcy5jbG9zZX0+WDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgICAgICA6IGZhbHNlXG4gICAgfVxufVxuXG5Ob3RpZmljYXRpb24ucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xvc2FibGU6ICBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxuTm90aWZpY2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aXRsZTogICAgJycsXG4gICAgY2xvc2FibGU6IHRydWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShOb3RpZmljYXRpb24pOyIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3ByZWxvYWRlcicsIHtcbiAgICAgICAgICAgICAgICAncHJlbG9hZGVyLXN0YXJ0JzogdGhpcy5wcm9wcy51aSA9PT0gJ2lzTG9hZGluZycsXG4gICAgICAgICAgICAgICAgJ3ByZWxvYWRlci1lbmQnOiAgIHRoaXMucHJvcHMudWkgPT09ICdpc0xvYWRlZCdcbiAgICAgICAgICAgIH0pfT48L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgTWFwU3RhdGVzVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcbiAgICB1aTogc3RvcmUudWkudWlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1hcFN0YXRlc1RvUHJvcHMpKFByZWxvYWRlcik7XG5cbiIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTZWFyY2hGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IHEgPSB0aGlzLnJlZnMuZm9ybS5xdWVyeVNlbGVjdG9yKCcjcScpO1xuXG4gICAgICAgIGlmKHEudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy8nICsgcS52YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSByZWY9XCJmb3JtXCIgb25TdWJtaXQ9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpdGVtIGl0ZW0tc3RhY2tlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIG5hbWU9XCJxXCIgaWQ9XCJxXCIgY2xhc3NOYW1lPVwib25lLXdob2xlXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgR2l0aHViIHVzZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuU2VhcmNoRmllbGQuY29udGV4dFR5cGVzID0ge1xuICAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGaWVsZDsiLCIvKipcbiAqIEBhdXRob3IgQmlsYWwgQ2luYXJsaVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtnZXRGb3JtYXR0ZWREYXRlfSBmcm9tICcuLi8uLi9zeXN0ZW0vY29tbW9uJztcblxuaW1wb3J0IE1ldGEgZnJvbSAnLi4vbWV0YSc7XG5cbmNsYXNzIFVzZXJDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmF2YXRhcl91cmx9IGFsdD17dGhpcy5wcm9wcy5uYW1lfSBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhci1waG90b1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVzZXItbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+e3RoaXMucHJvcHMubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1tZXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWV0YSBpY29uPVwiY2xvY2tcIiB2YWx1ZT17J0pvaW5lZCBvbiAnICsgZ2V0Rm9ybWF0dGVkRGF0ZSh0aGlzLnByb3BzLmNyZWF0ZWRfYXQpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1ldGEgaWNvbj1cImxvY2F0aW9uXCIgdmFsdWU9e3RoaXMucHJvcHMubG9jYXRpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWV0YSBpY29uPVwiYnJhbmNoXCIgdmFsdWU9e3RoaXMucHJvcHMucHVibGljX3JlcG9zICsgJyBwdWJsaWMgcmVwbyhzKSd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWV0YSBpY29uPVwicGVyc29uXCIgdmFsdWU9e3RoaXMucHJvcHMuZm9sbG93ZXJzICsgJyBmb2xsb3dlcihzKSd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJDYXJkOyIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTWV0YSBmcm9tICcuLi9tZXRhJztcblxuY2xhc3MgUmVwbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidXNlci1yZXBvXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5odG1sX3VybH0gY2xhc3NOYW1lPVwidXNlci1yZXBvLW5hbWVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1saW5rLWV4dGVybmFsXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwby1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwby1tZXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGFuZ3VhZ2UgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxNZXRhIHZhbHVlPXt0aGlzLnByb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8TWV0YSBpY29uPVwicmVwby1mb3JrZWRcIiB0aXRsZT1cIkZvcmtzXCIgdmFsdWU9e3RoaXMucHJvcHMuZm9ya3NfY291bnR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxNZXRhIGljb249XCJzdGFyXCIgdGl0bGU9XCJTdGFyXCIgdmFsdWU9e3RoaXMucHJvcHMuc3RhcmdhemVyc19jb3VudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPE1ldGEgaWNvbj1cImV5ZVwiIHRpdGxlPVwiV2F0Y2hlcnNcIiB2YWx1ZT17dGhpcy5wcm9wcy53YXRjaGVyc19jb3VudH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXBvOyIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCB1aSBmcm9tICcuLi8uLi9tb2R1bGVzL3VpJztcbmltcG9ydCB7Z2V0VXNlclJlcG9zfSBmcm9tICcuLi8uLi9tb2R1bGVzL3VzZXInO1xuaW1wb3J0IG5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vLi4vbW9kdWxlcy9ub3RpZmljYXRpb25zJztcblxuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi9ub3RpZmljYXRpb24nO1xuaW1wb3J0IFJlcG8gZnJvbSAnLi9yZXBvJztcblxuY2xhc3MgVXNlclJlcG9zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJlcG9zOiBbXSxcbiAgICAgICAgICAgIG93blJlcG9zOiBbXSxcbiAgICAgICAgICAgIGZvcmtlZFJlcG9zOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNob3dSZXBvcyh0aGlzLnByb3BzLmxvZ2luKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgICAgIGlmKG5ld1Byb3BzLmxvZ2luICE9PSB0aGlzLnByb3BzLmxvZ2luKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dSZXBvcyhuZXdQcm9wcy5sb2dpbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93UmVwb3ModXNlcm5hbWUpIHtcbiAgICAgICAgdWkuc3RhcnRMb2FkaW5nKCk7XG5cbiAgICAgICAgZ2V0VXNlclJlcG9zKHVzZXJuYW1lLCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJlcG9zOiByZXNwb25zZS5kZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICBvd25SZXBvczogcmVzcG9uc2UuZGV0YWlscy5maWx0ZXIoaXRlbSA9PiB7IHJldHVybiAhaXRlbS5mb3JrfSksXG4gICAgICAgICAgICAgICAgICAgIGZvcmtlZFJlcG9zOiByZXNwb25zZS5kZXRhaWxzLmZpbHRlcihpdGVtID0+IHsgcmV0dXJuIGl0ZW0uZm9ya30pLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25zLnN5c3RlbUVycm9yKHJlc3BvbnNlLmRldGFpbHMuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVpLnN0b3BMb2FkaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd1c2VyLXJlcG9zLXdyYXBwZXInLCB7J2lzLWhpZGRlbic6ICF0aGlzLnByb3BzLmlkfSl9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wdWJsaWNfcmVwb3MgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1c2VyLXJlcG8tbGlzdC10aXRsZVwiPlVzZXIgUmVwb3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3duUmVwb3MubWFwKChyZXBvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlcG8ga2V5PXtyZXBvLmlkfSB7Li4ucmVwb30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidXNlci1yZXBvLWxpc3QtdGl0bGVcIj5Gb3JrZWQgUmVwb3MgUmVwb3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9ya2VkUmVwb3MubWFwKChyZXBvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlcG8ga2V5PXtyZXBvLmlkfSB7Li4ucmVwb30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24taW5mb1wiIGNsb3NhYmxlPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2VyIGRvZXMgbm90IGhhdmUgYW55IHB1YmxpYyByZXBvc2l0b3JpZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L05vdGlmaWNhdGlvbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclJlcG9zOyIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2NyZWF0ZUNvbnN0YW50c30gZnJvbSAnLi4vLi4vc3lzdGVtL3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29uc3RhbnRzKFxuICAgICdTSE9XX05PVElGSUNBVElPTicsXG4gICAgJ0hJREVfTk9USUZJQ0FUSU9OJ1xuKTsiLCIvKipcbiAqIEBhdXRob3IgQmlsYWwgQ2luYXJsaVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtjcmVhdGVDb25zdGFudHN9IGZyb20gJy4uLy4uL3N5c3RlbS9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnN0YW50cyhcbiAgICAnSVNfTE9BRElORycsXG4gICAgJ0lTX0xPQURFRCcsXG4gICAgJ0FERF9QQUdFX0NMQVNTJyxcbiAgICAnUkVNT1ZFX1BBR0VfQ0xBU1MnXG4pOyIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvcHJlbG9hZGVyJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb24nO1xuXG5jbGFzcyBHaXRseUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZ2l0bHktYXBwJywgdGhpcy5wcm9wcy5wYWdlQ2xhc3MpfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGFnZUNsYXNzICE9PSAnaG9tZSdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8UHJlbG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW5cIiBjbGFzc05hbWU9XCJwYWdlLW1haW4gY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd05vdGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPE5vdGlmaWNhdGlvbiB7Li4udGhpcy5wcm9wcy5ub3RpZmljYXRpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IE1hcFN0YXRlc1RvUHJvcHMgPSAoc3RvcmUpID0+ICh7XG4gICAgdWk6ICAgICAgICAgICAgICAgc3RvcmUudWkudWksXG4gICAgcGFnZUNsYXNzOiAgICAgICAgc3RvcmUudWkucGFnZUNsYXNzLFxuICAgIG5vdGlmaWNhdGlvbjogICAgIHN0b3JlLm5vdGlmaWNhdGlvbi5ub3RpZmljYXRpb24sXG4gICAgc2hvd05vdGlmaWNhdGlvbjogc3RvcmUubm90aWZpY2F0aW9uLnNob3dOb3RpZmljYXRpb25cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1hcFN0YXRlc1RvUHJvcHMpKEdpdGx5QXBwKTsiLCIvKipcbiAqIEBhdXRob3IgQmlsYWwgQ2luYXJsaVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Um91dGVyLCBoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQge3JvdXRlc30gZnJvbSAnLi9yb3V0ZXMnXG5cbmNvbnN0IFJvb3QgPSAoe3N0b3JlfSkgPT4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cbiAgICAgICAgICAgIHtyb3V0ZXN9XG4gICAgICAgIDwvUm91dGVyPlxuICAgIDwvUHJvdmlkZXI+XG4pO1xuXG5yZW5kZXIoPFJvb3Qgc3RvcmU9e3N0b3JlfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpdGx5LWFwcCcpKTsiLCIvKipcbiAqIEBhdXRob3IgQmlsYWwgQ2luYXJsaVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4uL3N0b3JlJztcblxuY29uc3Qgbm90aWZpY2F0aW9uID0gKHR5cGUsIG1lc3NhZ2UpID0+IHtcbiAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICAgICdTSE9XX05PVElGSUNBVElPTicsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdHlwZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGNsb3NhYmxlOiAgZmFsc2VcbiAgICAgICAgfVxuICAgIH0pXG59O1xuXG5jb25zdCBub3RpZmljYXRpb25XYXJuaW5nID0gKG1lc3NhZ2UpID0+IHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uKCdub3RpZmljYXRpb24td2FybmluZycsIG1lc3NhZ2UpO1xufTtcblxuY29uc3Qgbm90aWZpY2F0aW9uRXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuICAgIHJldHVybiBub3RpZmljYXRpb24oJ25vdGlmaWNhdGlvbi1lcnJvcicsIG1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhpZGVOb3RpZmljYXRpb24gPSAoKSA9PiB7XG4gICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnSElERV9OT1RJRklDQVRJT04nXG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlck5vdEZvdW5kID0gKHVzZXJuYW1lKSA9PiB7XG4gICAgbGV0IG1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cD5XZSBjYW5ub3QgZmluZCBhIHVzZXIgY2FsbGVkIDxzdHJvbmc+e3VzZXJuYW1lfTwvc3Ryb25nPi4gWW91IGNhbiBzZWFyY2ggYW5vdGhlclxuICAgICAgICAgICAgICAgIHVzZXIgYnkgdXNpbmcgdGhlIHNlYXJjaCBmaWVsZCBhdCB0aGUgaGVhZGVyPC9wPlxuICAgICAgICApXG4gICAgfTtcblxuICAgIG5vdGlmaWNhdGlvbldhcm5pbmcobWVzc2FnZSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3lzdGVtRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICBsZXQgbWVzc2FnZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+VGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIGNvbm5lY3RpbmcgdG8gQVBJLiBQbGVhc2UgdHJ5IHNvbWV0aW1lIGxhdGVyLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5FcnJvciBTdGF0dXM6IDxiciAvPiB7ZXJyb3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgbm90aWZpY2F0aW9uRXJyb3IobWVzc2FnZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaGlkZU5vdGlmaWNhdGlvbixcbiAgICBzeXN0ZW1FcnJvcixcbiAgICB1c2VyTm90Rm91bmRcbn0iLCIvKipcbiAqIEBhdXRob3IgQmlsYWwgQ2luYXJsaVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vc3RvcmUnO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRMb2FkaW5nID0gKCkgPT4ge1xuICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ0lTX0xPQURJTkcnXG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiB7XG4gICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnSVNfTE9BREVEJ1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFBhZ2VDbGFzcyA9IChwYWdlQ2xhc3MpID0+IHtcbiAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICAgICdBRERfUEFHRV9DTEFTUycsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHBhZ2VDbGFzczogcGFnZUNsYXNzXG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGFydExvYWRpbmcsXG4gICAgc3RvcExvYWRpbmcsXG4gICAgYWRkUGFnZUNsYXNzXG59OyIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge3BsYWluR2V0fSBmcm9tICcuLi9zeXN0ZW0vYWpheCc7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHVzZXJuYW1lLCBjYWxsYmFjaykgPT4ge1xuICAgIGxldCB1c2VyID0gZW5jb2RlVVJJKHVzZXJuYW1lKTtcblxuICAgIHBsYWluR2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLycgKyB1c2VyLCBjYWxsYmFjayk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlclJlcG9zID0gKHVzZXJuYW1lLCBjYWxsYmFjaykgPT4ge1xuICAgIGxldCB1c2VyID0gZW5jb2RlVVJJKHVzZXJuYW1lKTtcblxuICAgIHBsYWluR2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLycgKyB1c2VyICsgJy9yZXBvcycsIGNhbGxiYWNrKTtcbn07IiwiLyoqXG4gKiBAYXV0aG9yIEJpbGFsIENpbmFybGlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdWkgZnJvbSAnLi91aSc7XG5pbXBvcnQgbm90aWZpY2F0aW9uIGZyb20gJy4vbm90aWZpY2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICB1aSxcbiAgICBub3RpZmljYXRpb25cbn0pOyIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2NyZWF0ZVJlZHVjZXJ9IGZyb20gJy4uL3N5c3RlbS9zdG9yZSc7XG5pbXBvcnQgKiBhcyBub3RpZmljYXRpb25BY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25zL25vdGlmaWNhdGlvbic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBub3RpZmljYXRpb246ICAgICB7fSxcbiAgICBzaG93Tm90aWZpY2F0aW9uOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIHtcbiAgICBbbm90aWZpY2F0aW9uQWN0aW9ucy5kZWZhdWx0LlNIT1dfTk9USUZJQ0FUSU9OXTogKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uOiAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb246IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBbbm90aWZpY2F0aW9uQWN0aW9ucy5kZWZhdWx0LkhJREVfTk9USUZJQ0FUSU9OXTogKHN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uOiAgICAge30sXG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2NyZWF0ZVJlZHVjZXJ9IGZyb20gJy4uL3N5c3RlbS9zdG9yZSc7XG5pbXBvcnQgKiBhcyB1aUFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnMvdWknO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdWk6ICAgICAgICAnJyxcbiAgICBwYWdlQ2xhc3M6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIHtcbiAgICBbdWlBY3Rpb25zLmRlZmF1bHQuSVNfTE9BRElOR106IChzdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIHVpOiAnaXNMb2FkaW5nJ1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFt1aUFjdGlvbnMuZGVmYXVsdC5JU19MT0FERURdOiAgKHN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgdWk6ICdpc0xvYWRlZCdcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBbdWlBY3Rpb25zLmRlZmF1bHQuQUREX1BBR0VfQ0xBU1NdOiAgICAgICAoc3RhdGUsIHBheWxvYWQpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBwYWdlQ2xhc3M6IHBheWxvYWQucGFnZUNsYXNzXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgW3VpQWN0aW9ucy5kZWZhdWx0LlJFTU9WRV9QQUdFX0NMQVNTXTogICAgKHN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgcGFnZUNsYXNzOiAnJ1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgSW5kZXhSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IEdpdGx5QXBwIGZyb20gJy4uL2NvbnRhaW5lcnMnO1xuXG5pbXBvcnQgKiBhcyBWaWV3cyBmcm9tICcuLi92aWV3cyc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSAoXG4gICAgPFJvdXRlIGNvbXBvbmVudD17R2l0bHlBcHB9PlxuICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e1ZpZXdzLkhvbWV9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17Vmlld3MuSG9tZX0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvOnVzZXJcIiBjb21wb25lbnRzPXtWaWV3cy5Vc2VyfSAvPlxuICAgIDwvUm91dGU+XG4pOyIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgUm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShSb290UmVkdWNlcik7IiwiLyoqXG4gKiBAYXV0aG9yIEJpbGFsIENpbmFybGlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7dHJ5UGFyc2V9IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uICRodHRwKHVybCkge1xuICAgIGxldCBhamF4ID0gZnVuY3Rpb24obWV0aG9kLCB1cmwsIGRhdGEpIHtcblxuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHJlcXVlc3QgICAgID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgICAgICAgICAgICAgdXJpICAgICAgICAgPSB1cmwsXG4gICAgICAgICAgICAgICAgcG9zdERhdGEgICAgPSAnJyxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0OnV0Zi04JztcblxuICAgICAgICAgICAgaWYoZGF0YSAmJiBtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgdXJpICs9ICc/JztcbiAgICAgICAgICAgICAgICBsZXQgYXJnY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGZvcih2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihhcmdjb3VudCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpICs9ICcmJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaSArPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmkpO1xuICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMucmVzcG9uc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnlQYXJzZShyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICAgICAgICAgICB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6ICAgICAgIHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiAgICAgICAgIHRyeVBhcnNlKHRoaXMucmVzcG9uc2UpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxSZXNwb25zZTogdGhpc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICAgICAgICAgICB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogICAgICAgdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogICAgICAgICB0cnlQYXJzZSh0aGlzLnJlc3BvbnNlKSxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxSZXNwb25zZTogdGhpc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKHBvc3REYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgICdnZXQnOiAgICBmdW5jdGlvbihkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gYWpheCgnR0VUJywgdXJsLCBkYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgJ3Bvc3QnOiAgIGZ1bmN0aW9uKGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBhamF4KCdQT1NUJywgdXJsLCBkYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgJ3B1dCc6ICAgIGZ1bmN0aW9uKGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBhamF4KCdQVVQnLCB1cmwsIGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICAnZGVsZXRlJzogZnVuY3Rpb24oZGF0YSwgb3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIGFqYXgoJ0RFTEVURScsIHVybCwgZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgcGxhaW5HZXQgPSAodXJsLCBjYWxsYmFjaykgPT4ge1xuICAgICRodHRwKHVybClcbiAgICAgICAgLmdldCgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIHN0YXR1czogICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiByZXNwb25zZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICAnZXJyb3InLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHJlc3BvbnNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59IiwiLyoqXG4gKiBAYXV0aG9yIEJpbGFsIENpbmFybGlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjb25zdCB0cnlQYXJzZSA9IChzdHIpID0+IHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEZvcm1hdHRlZERhdGUgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBfZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXG4gICAgcmV0dXJuIF9kYXRlLnRvRGF0ZVN0cmluZygpO1xufTsiLCIvKipcbiAqIEBhdXRob3IgQmlsYWwgQ2luYXJsaVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnN0YW50cyguLi5jb25zdGFudHMpIHtcbiAgICByZXR1cm4gY29uc3RhbnRzLnJlZHVjZSgoYWNjLCBjb25zdGFudCkgPT4ge1xuICAgICAgICBhY2NbY29uc3RhbnRdID0gY29uc3RhbnQ7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIHJlZHVjZXJNYXApIHtcbiAgICByZXR1cm4gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJNYXBbYWN0aW9uLnR5cGVdO1xuXG4gICAgICAgIHJldHVybiByZWR1Y2VyXG4gICAgICAgICAgICA/IHJlZHVjZXIoc3RhdGUsIGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgICAgOiBzdGF0ZTtcbiAgICB9O1xufSIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoLWZvcm0nO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogICAgJ0FERF9QQUdFX0NMQVNTJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBwYWdlQ2xhc3M6ICdob21lJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibGFuZGluZy1icmFuZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgR2l0bHlcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxhbmRpbmctc3VidGl0bGVcIj5hIHNpbXBsZSByZWFjdCBhcHAgZm9yIGxpc3RpbmcgdXNlciByZXBvc2l0b3JpZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShIb21lKTsiLCIvKipcbiAqIEBhdXRob3IgQmlsYWwgQ2luYXJsaVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IF9Ib21lIGZyb20gJy4vaG9tZSc7XG5leHBvcnQge19Ib21lIGFzIEhvbWV9O1xuaW1wb3J0IF9Vc2VyIGZyb20gJy4vdXNlcic7XG5leHBvcnQge19Vc2VyIGFzIFVzZXJ9OyIsIi8qKlxuICogQGF1dGhvciBCaWxhbCBDaW5hcmxpXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB1aSBmcm9tICcuLi9tb2R1bGVzL3VpJztcbmltcG9ydCB7Z2V0VXNlcn0gZnJvbSAnLi4vbW9kdWxlcy91c2VyJztcbmltcG9ydCBub3RpZmljYXRpb25zIGZyb20gJy4uL21vZHVsZXMvbm90aWZpY2F0aW9ucyc7XG5cbmltcG9ydCBVc2VyQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3VzZXIvY2FyZCc7XG5pbXBvcnQgVXNlclJlcG9zIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlci9yZXBvcyc7XG5cbmNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXNlcjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB1aS5hZGRQYWdlQ2xhc3MoJ3VzZXInKTtcblxuICAgICAgICB0aGlzLnNob3dVc2VyKHRoaXMucHJvcHMucGFyYW1zLnVzZXIpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICAgICAgaWYobmV3UHJvcHMucGFyYW1zICE9PSB0aGlzLnByb3BzLnBhcmFtcykge1xuICAgICAgICAgICAgdGhpcy5zaG93VXNlcihuZXdQcm9wcy5wYXJhbXMudXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93VXNlcih1c2VyKSB7XG4gICAgICAgIHVpLnN0YXJ0TG9hZGluZygpO1xuXG4gICAgICAgIGdldFVzZXIodXNlciwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbnMuaGlkZU5vdGlmaWNhdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHJlc3BvbnNlLmRldGFpbHNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1c2VyOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGV0YWlscy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25zLnVzZXJOb3RGb3VuZCh1c2VyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9ucy5zeXN0ZW1FcnJvcihyZXNwb25zZS5kZXRhaWxzLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdWkuc3RvcExvYWRpbmcoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxVc2VyQ2FyZCB7Li4udGhpcy5zdGF0ZS51c2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8VXNlclJlcG9zIHsuLi50aGlzLnN0YXRlLnVzZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShVc2VyKTsiXX0=