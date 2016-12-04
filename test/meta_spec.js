/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';

import Meta from '../source/scripts/components/meta';

describe('A Meta', () => {
    it("contains spec with an expectation", function() {
        expect(mount(<Meta />).find('.single-meta').length).to.equal(1);
    });

    it("contains spec with an expectation", function() {
        expect(mount(<Meta icon="search" />).find('i').length).to.equal(1);
    });

    it("contains spec with an expectation", function() {
        expect(mount(<Meta title="Watcher" />).find('.single-meta-title').length).to.equal(1);
    });
});