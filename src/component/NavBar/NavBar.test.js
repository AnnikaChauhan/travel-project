import React from "react";
import NavBar from "./NavBar";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

// taken from https://enzymejs.github.io/enzyme/docs/installation/index.html as per error instructions - leave this for now incase you need it
// const wrapper = shallow(<NavBar />);

describe("Navbar", () => {
    let component;

    beforeEach(() => {
        component = mount(<NavBar />);
    });

    it("Should render a naviation bar at the top of the page", () => {
        expect(component.find("nav").length).toEqual(1);
    });
});