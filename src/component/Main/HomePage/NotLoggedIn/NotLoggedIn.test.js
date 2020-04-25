import React from "react";
import NotLoggedIn from "./NotLoggedIn";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

describe('NotLoggedIn', () => {
    let component;

    beforeEach(() => {
        component = mount(<NotLoggedIn />);
    });

    it('renders the Tabs bootstap component', () => {
        expect(component.find('Tabs').length).toBe(1);
    });

    it('renders the LogIn reusable component', () => {
        expect(component.find('LogIn').length).toBe(1);
    });

    it('renders the SignUp reusable component', () => {
        expect(component.find('SignUp').length).toBe(1);
    });

    it('renders the LogOut reusable component', () => {
        expect(component.find('LogOut').length).toBe(1);
    });
})