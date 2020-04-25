import React from "react";
import CreateNewBlogPost from "./CreateNewBlogPost";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

describe('CreateNewBlogPost', () => {
    let component;

    beforeEach(() => {
        component = mount(<CreateNewBlogPost />);
    });

    it('should render three input tags', () => {
        expect(component.find('input').length).toBe(3);
    });
})