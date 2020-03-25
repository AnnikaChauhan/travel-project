import React, {Component} from "react";
import Header from "../../Utilities/Header";

export default class SearchPage extends Component {
    state = {
        baseURL: "https://api.openweathermap.org/data/2.5/weather",
        openWeatherKey: "c8aa04aa00788b5f3da95ebae6e238b7",
        citySearch: "London",
        result: null
    }

    componentDidMount = () => {
        let url = `${this.state.baseURL}?q=${this.state.citySearch}&appid=${this.state.openWeatherKey}`;
        fetch(url).then(response => {
            this.setState({ result: response.json()});
            console.log(this.state.result);
            //.then again to get that back
        })
    }
    

    render(){
        return(
            <section>
                <Header hOne={'Search where to Explore'} hTwo={'Find the weather and local attractions in a city of your choice.'} />
                <input type="text" name="searchbar" id=""/>
                <p>Weather & Attractions</p>
            </section>
        );
    }
}