import React, { Component } from "react";
import styles from "./Weather.module.scss";

export default class Weather extends Component {
    render() {
        return (
            <article>
                <h3>Search results for: {this.props.weatherData.name}</h3>
                <p className={styles.weather} >
                    Today's forecast is {this.props.weatherData.weather[0].description}
                    <br />
                    current temperature is {this.props.weatherData.main.temp} degrees KELVIN 
                    <br />
                    but it feels like {this.props.weatherData.main.feels_like} degrees KELVIN
                    <br />
                    with temperature highs of {this.props.weatherData.main.temp_max} degrees KELVIN
                    <br />
                    & lows of {this.props.weatherData.main.temp_min} degrees KELVIN
                </p>
                {/* do sunrise and sunset at some point when u understand date */}
                {/* <p>{JSON.stringify(this.state.openWeather.weatherData)}</p> */}
            </article>
        );
    }
}