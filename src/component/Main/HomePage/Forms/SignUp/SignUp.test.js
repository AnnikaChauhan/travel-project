import React from "react";
import SignUp from "./SignUp";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

const mockData = {
    email: "test@tester.com",
    password: "testpassword"
}

describe('SignUp', () => {
    let component;
    let testFunctionOne;
    let testFunctionTwo;

    beforeEach(() => {
        testFunctionOne = jest.fn();
        testFunctionTwo = jest.fn();
        component = mount(<SignUp email={mockData.email} password={mockData.password} handleChange={testFunctionOne} signup={testFunctionTwo} />);
    });

    it('should render two input tags', () => {
        expect(component.find('input').length).toBe(2);
    });

    it('should render a single Button reusable component', () => {
        expect(component.find('Button').length).toBe(1);
    });

    it('should run test function one when there is a change on an input tag', () => {
        component.find('#emailSU').simulate('change');
        expect(testFunctionOne).toHaveBeenCalledTimes(1);
    });

    it('should run test function two when the button is clicked', () => {
        component.find('Button').simulate('click');
        expect(testFunctionTwo).toHaveBeenCalledTimes(1);
    });

    it('should receive data as passed down through props from the parent', () => {
        expect(component.props().email).toEqual(mockData.email);
    });

})
