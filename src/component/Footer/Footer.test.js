import React from "react";
import Footer from "./Footer";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

describe('Footer', () => {
    let component;

    beforeEach(() => {
        component = mount(<Footer />);
    });

    it('should render a div component which is a spacer for the fixed footer', () => {
        expect(component.find('div').length).toBe(1);
    });

    it('should render the footer component', () => {
        expect(component.find('footer').length).toBe(1);
    });

    it('should contain a p tag for text', () => {
        expect(component.find('p').length).toBe(1);
    });

    it('should contain contain the text - made by annika chauhan', () => {
        expect(component.text()).toContain('Made by Annika Chauhan');
    });
})