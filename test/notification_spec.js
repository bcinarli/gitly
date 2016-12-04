/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';

import {store} from '../source/scripts/store';

import Notification from '../source/scripts/components/notification';

describe("A Notification", function() {
    it("contains spec with an expectation", () => {
        expect(mount(<Notification store={store} />).find('.notification').length).to.equal(1);
    });

    it('should render children when passed in', () => {
        const wrapper = shallow(
            <Notification store={store}>
                <div className="unique" />
            </Notification>
        );
        expect(wrapper.contains(<div className="unique" />)).to.equal(true);
    });

    it('should have additional class when passed in', () => {
        expect(shallow(<Notification store={store} className="notification-error" />).is('.notification-error')).to.equal(true);
    });
});