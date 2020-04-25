import React from "react";
import Venues from "./Venues";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

const mockData = {
    fourSquare: {
        venueData: []
    }
}

describe('Venues', () => {
    let component;

    beforeEach(() => {
        component = mount(<Venues venueData={mockData.fourSquare.venueData} />)
    })

    it('should render a section tag', () => {
        expect(component.find('section').length).toBe(1);
    });

    it('should not render a Card bootstrap component as it is inside the ternary', () => {
        expect(component.find('Card').length).toBe(0);
    });
})