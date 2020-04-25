import React from "react";
import AboutPage from "./AboutPage";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

describe('AboutPage', () => {
    let component;

    beforeEach(() => {
        component = mount(<AboutPage />);
    });

    it('should render a div for page content', () => {
        expect(component.find('div').length).toBe(1);
    });

    it('should render the Header reusable component', () => {
        expect(component.find('Header').length).toBe(1);
    });
})