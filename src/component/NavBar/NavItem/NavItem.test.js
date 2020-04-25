import React from "react";
import NavItem from "./NavItem";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

const mockData = {
    name: "Home",
    route: "/home"
}

describe("NavItem", () => {
    let component;

    beforeEach(() => {
        component = mount(
            <NavItem
                name={mockData.name}
                route={mockData.route}
            />
        )
    })

    it("should receive the data passed in as props from the parent component", () => {
        expect(component.props().name).toEqual(mockData.name);
    })

    it("should render the data passed in as props", () => {
        expect(component.text()).toContain(mockData.name);
    })

})