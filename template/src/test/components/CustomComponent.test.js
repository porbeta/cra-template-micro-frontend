import * as React from 'react';
import {shallow, configure} from 'enzyme';
import { CustomComponent } from '../../main/components/CustomComponent.js';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

configure({adapter: new Adapter()});

test('should create CustomComponent with properties', () => {
    const onChange = () => {};

    const wrapper = shallow(<CustomComponent customProperty="Success!" onCustomEvent={onChange} />);
    expect(wrapper.find('p').text()).to.equal('Hello Success! from your friendly React component.');
});