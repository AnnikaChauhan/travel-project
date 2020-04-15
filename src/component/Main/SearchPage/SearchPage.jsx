import React, { Component } from "react";
import axios from "axios";
import Header from "../../Utilities/Header";
import SearchBar from "../../Utilities/SearchBar"
import Weather from "./Weather";
import Venues from "./Venues";
import firebase from "../../../firebase"; 

// const firebase = require('firebase/app');
// const functions = require('firebase/functions');
// import * as functions from 'firebase-functions';
// const functions = require('firebase-functions');
// console.log(functions);
// const foursquare = functions.config().foursquare;
// console.log(foursquare);

export default class SearchPage extends Component {
    state = {
        citySearch: "",
        openWeather: {
            baseURL: "https://api.openweathermap.org/data/2.5/weather",
            openWeatherKey: process.env.REACT_APP_OPENWEATHER_KEY,
            weatherData: ""
        },
        fourSquare: {
            FSqBaseURL: "https://api.foursquare.com/v2/venues",
            FSsearchLimit: "20",
            FSclientID: process.env.REACT_APP_FOURSQUARE_ID,
            FSclientSecret: process.env.REACT_APP_FOURSQUARE_SECRET,
            // FSclientID: foursquare.clientid,
            // FSclientSecret: foursquare.clientsecret,
            FSversion: "20200229",
            venueData: []
        }
    }
    //push all categories into a SET and then display the different categories along the top - with the ability to filter by category

    //maybe push the entire URL through the back
    requestWeatherSearchResults = async () => {
        // const key = firebase.functions().httpsCallable('getOpenWeatherID');
        // key();
        let weatherUrl = `${this.state.openWeather.baseURL}?q=${this.state.citySearch}&appid=${this.state.openWeather.openWeatherKey}`;
        try {
            const response = await axios.get(weatherUrl);
            const weatherData = response.data;
            this.setState({
                openWeather: {
                    ...this.state.openWeather,
                    weatherData
                }
            })
        }
        catch(error){
            console.log(error);
        }
        
    }

    fetchFourSquareData() {
        let fourSquareURL = `${this.state.fourSquare.FSqBaseURL}/explore?near=${this.state.citySearch}&limit=${this.state.fourSquare.FSsearchLimit}&client_id=${this.state.fourSquare.FSclientID}&client_secret=${this.state.fourSquare.FSclientSecret}&v=${this.state.fourSquare.FSversion}`;
        fetch(fourSquareURL)
            .then(response => response.json())
            .then(data => {
                let venueData = data.response.groups[0].items;
                this.setState({
                    fourSquare: {
                        ...this.state.fourSquare,
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
        // console.log('click');
        this.requestWeatherSearchResults();
        this.fetchFourSquareData();
        // const function = firebase.functions().httpsCallable('name of function')
    }

    render() {
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
                        : <Weather weatherData={this.state.openWeather.weatherData} />
                }
                <Venues venueData={this.state.fourSquare.venueData} />
            </section>
        );
    }
}