import React from "react";
import LogOut from "./LogOut";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

describe('LogOut', () => {
    let component;
    let testFunction;

    beforeEach(() => {
        testFunction = jest.fn();
        component = mount(<LogOut logout={testFunction} />);
    });

    it('should render a single Button reusable component', () => {
        expect(component.find('Button').length).toBe(1);
    });

    it('should run the function when the button is clicked', () => {
        component.find('Button').simulate('click');
        expect(testFunction).toHaveBeenCalledTimes(1);
    });
})
