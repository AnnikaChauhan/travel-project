import React from "react";
import SearchPage from "./SearchPage";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

describe('SearchPage', () => {
    let component;

    beforeEach(() => {
        component = mount(<SearchPage />);
    });

    it('should render a Header reusable component', () => {
        expect(component.find('Header').length).toBe(1);
    });

    it('should render a div tag for the searchbar and another inherrited from another component', () => {
        expect(component.find('div').length).toBe(2);
    });

    it('should render a SearchBar reusable component', () => {
        expect(component.find('SearchBar').length).toBe(1);
    });

    it('should render no Weather component on initial launch because this is rendered by the ternary', () => {
        expect(component.find('Weather').length).toBe(0);
    });

    it('should render no Venues component due to the inherrited ternary in that component', () => {
        expect(component.find('Venues').length).toBe(0);
    });
})