import React from "react";
import Weather from "./Weather";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { mount } from 'enzyme';

const mockData = {
    openWeather: {
        weatherData: {
            name: "london",
            main: {
                temp: 10,
                feels_like: 5,
                temp_max: 15,
                temp_min: 1
            },
            weather: [{
                description: "hot"
            }]
        }
    }
}

describe('Weather', () => {
    let component;

    beforeEach(() => {
        component = mount(<Weather weatherData={mockData.openWeather.weatherData} />)
    })

    it('should render an article tag', () => {
        expect(component.find('article').length).toBe(1);
    });

    it('should render a single p tag with all of the weather info contained inside it', () => {
        expect(component.find('p').length).toBe(1);
    });
})