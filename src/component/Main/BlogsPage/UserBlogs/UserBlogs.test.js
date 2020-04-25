import React from "react";
import UserBlogs from "./UserBlogs";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

const mockData = {
    user: {
        uid: "u53r"
    }
}

describe('UserBlogs', () => {
    let component;

    beforeEach(() => {
        component = mount(<UserBlogs user={mockData.user} />);
    });

    it('should return a section tag', () => {
        expect(component.find('section').length).toBe(1);
    });
})