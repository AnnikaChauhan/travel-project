import React from "react";
import BlogsPage from "./BlogsPage";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

const mockData = {
    user: {
        uid: "123"
    }
}

describe('BlogsPage', () => {
    let component;

    beforeEach(() => {
        component = mount(<BlogsPage user={mockData.user} />);
    });

    it('should render a Header reusable component', () => {
        expect(component.find('Header').length).toBe(1);
    });

    it('should render two div tags', () => {
        expect(component.find('div').length).toBe(2);
    });

    it('should render two article tags for the seperate types of blog that the user will see', () => {
        expect(component.find('article').length).toBe(2);
    });

    it('should render the blogs components', () => {
        expect(component.find('UserBlogs').length).toBe(2);
    });

})