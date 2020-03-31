import React, { Component } from "react";
import styles from "./Weather.module.scss";

export default class Weather extends Component {
    convertKelvinToCelcius = (kelvin) => {
        let celsius = kelvin - 273.15;
        celsius = Number.parseFloat(celsius).toFixed(2);
        return celsius;
    } 

    render() {
        return (
            <article>
                <h3>Search results for: {this.props.weatherData.name}</h3>
                <p className={styles.weather} >
                    Today's forecast is {this.props.weatherData.weather[0].description}
                    <br />
                    current temperature is {this.convertKelvinToCelcius(this.props.weatherData.main.temp)}°C 
                    <br />
                    but it feels like {this.convertKelvinToCelcius(this.props.weatherData.main.feels_like)}°C
                    <br />
                    with temperature highs of {this.convertKelvinToCelcius(this.props.weatherData.main.temp_max)}°C
                    <br />
                    & lows of {this.convertKelvinToCelcius(this.props.weatherData.main.temp_min)}°C
                </p>
                {/* do sunrise and sunset at some point when u understand date */}
                {/* <p>{JSON.stringify(this.state.openWeather.weatherData)}</p> */}
            </article>
        );
    }
}