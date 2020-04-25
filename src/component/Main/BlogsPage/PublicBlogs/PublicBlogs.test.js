import React from "react";
import PublicBlogs from "./PublicBlogs";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

const mockData = {
    user: {
        uid: "u53r"
    }
}

describe('PublicBlogs', () => {
    let component;

    beforeEach(() => {
        component = mount(<PublicBlogs user={mockData.user} />);
    });

    it('should return a section tag', () => {
        expect(component.find('section').length).toBe(1);
    });
})