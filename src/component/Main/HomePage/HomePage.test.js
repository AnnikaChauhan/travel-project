import React from "react";
import HomePage from "./HomePage";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

describe('HomePage', () => {
    let component;

    beforeEach(() => {
        component = mount(<HomePage />);
    });

    it('should render a div for page content and then others for further content', () => {
        expect(component.find('div').length).toBe(11);
    });

    it('should render the Header reusable component', () => {
        expect(component.find('Header').length).toBe(1);
    });
})