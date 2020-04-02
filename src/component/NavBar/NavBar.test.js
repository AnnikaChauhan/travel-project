import React from "react";
import NavBar from "./NavBar";

import Adapter from 'enzyme-adapter-react-15';
import {mount} from "enzyme";

describe("Navbar", () => {
    let component;

    beforeEach(() => {
        component = mount(<NavBar />);
    });

    it("Should render a naviation bar at the top of the page", () => {
        expect(component.find("nav").length).toEqual(1);
    });
});