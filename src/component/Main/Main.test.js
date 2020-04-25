import React from "react";
import Main from "./Main";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

describe('Main', () => {
    let component;

    beforeEach(() => {
        component = mount(<Main />);
    });

    it('should render the routes', () => {
        expect(component.find('Routes').length).toEqual(1);
    });
})