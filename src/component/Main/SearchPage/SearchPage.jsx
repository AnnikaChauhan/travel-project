import React, { Component } from "react";
import Header from "../../Utilities/Header";
import SearchBar from "../../Utilities/SearchBar"
import Weather from "./Weather";
import Venues from "./Venues"

export default class SearchPage extends Component {
    state = {
        citySearch: "",
        openWeather: {
            baseURL: "https://api.openweathermap.org/data/2.5/weather",
            openWeatherKey: "c8aa04aa00788b5f3da95ebae6e238b7",
            weatherData: ""
        },
        fourSquare: {
            FSqBaseURL: "https://api.foursquare.com/v2/venues",
            FSsearchLimit: "50",
            FSclientID: "1UDUJRGAW503KCQO4VFBGGIRLVBGCWQZ0STNBEUWN4FITBAZ",
            FSclientSecret: "2JFKN3CQJYUJL35QINN1LLU0WO3ODJXHR5QALFTOMQ5D3VVY",
            FSversion: "20200229",
            venueData: []
        }
    }

    fetchWeatherSearchResults = () => {
        let weatherUrl = `${this.state.openWeather.baseURL}?q=${this.state.citySearch}&appid=${this.state.openWeather.openWeatherKey}`;
        fetch(weatherUrl)
            .then(response => response.json())
            .then((weatherData) => {
                //console.log(weatherData);
                this.setState({
                    openWeather: {
                        weatherData
                    }
                });
            })
            .catch(error => console.log(error));
    }

    fetchFourSquareData() {
        let fourSquareURL = `${this.state.fourSquare.FSqBaseURL}/explore?near=${this.state.citySearch}&limit=${this.state.fourSquare.FSsearchLimit}&client_id=${this.state.fourSquare.FSclientID}&client_secret=${this.state.fourSquare.FSclientSecret}&v=${this.state.fourSquare.FSversion}`;
        fetch(fourSquareURL)
            .then(response => response.json())
            .then(data => {
                let venueData = data.response.groups[0].items;
                //console.log(data.response.groups[0].items);
                this.setState({
                    fourSquare: {
                        venueData
                    }
                })
            })
            .catch(error => console.log(error));
    }

    handleChange = (e) => {
        this.setState({ citySearch: e.target.value });
    }

    handleClick = () => {
        this.fetchWeatherSearchResults();
        this.fetchFourSquareData();
        //this.setState({ citySearch: "" });
    }

    render() {
        console.log(this.state.fourSquare.venueData);
        return (
            <section>
                <Header hOne={'Search where to Explore'} hTwo={'Find the weather and local attractions in a city of your choice.'} />
                <div>
                    <SearchBar
                        placeholder={'Search a location here'}
                        value={this.state.citySearch}
                        handleChange={this.handleChange}
                        handleClick={this.handleClick}
                    />
                </div>
                {
                    !this.state.openWeather.weatherData
                        ? <p>Search using the search bar to receive exciting information!</p>
                        : <article>
                            <h4>Search results for: {this.state.openWeather.weatherData.name}</h4>
                            <p>
                                Today's forecast is {this.state.openWeather.weatherData.weather[0].description}
                                <br/>
                                current temperature is {this.state.openWeather.weatherData.main.temp} degrees something (prob fareheit?)
                                <br/>
                                but it feels like {this.state.openWeather.weatherData.main.feels_like} degrees something
                                <br/>
                                with temperature highs of {this.state.openWeather.weatherData.main.temp_max} degrees something
                                <br/>
                                & lows of {this.state.openWeather.weatherData.main.temp_min} degrees something
                            </p>
                            {/* do sunrise and sunset at some point when u understand date */}
                            {/* <p>{JSON.stringify(this.state.openWeather.weatherData)}</p> */}
                        </article>

                }
                { this.state.fourSquare.venueData.map((venue, index) => {
                            return <p key={index}>{venue.venue.name}</p>
                })}
                <Weather />
                <Venues />
                <p>This is the end of the page</p>
            </section>
        );
    }
}