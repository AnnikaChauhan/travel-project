import React from "react";
import NotFound from "./NotFound";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

describe('NotFound', () => {
    let component;

    beforeEach(() => {
        component = mount(<NotFound />);
    });

    it('should return a single p tag returning text', () => {
        expect(component.find('p').length).toBe(1);
    });

    it('should contain contain the text - made by annika chauhan', () => {
        expect(component.text()).toContain("We're sorry but the page you're looking for does not exist.");
    });
})