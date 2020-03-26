import React, {Component} from "react";
import Header from "../../Utilities/Header";
import SearchBar from "../../Utilities/SearchBar"

export default class SearchPage extends Component {
    state = {
        baseURL: "https://api.openweathermap.org/data/2.5/weather",
        openWeatherKey: "c8aa04aa00788b5f3da95ebae6e238b7",
        citySearch: "London",
        data: null
    }

    componentDidMount = () => {
        let weatherUrl = `${this.state.baseURL}?q=${this.state.citySearch}&appid=${this.state.openWeatherKey}`;
        fetch(weatherUrl)
            .then(response =>  response.json() )
            .then((data) => { this.setState({ data }) })
            .catch(error => {console.log(error)});
    }

    handleChange = () => {}
    
    render(){
        console.log(this.state.data);
        console.log(this.state.data);
        return(
            <section>
                <Header hOne={'Search where to Explore'} hTwo={'Find the weather and local attractions in a city of your choice.'} />
                <SearchBar
                    placeholder={'Search a location here'} 
                    
                />
                <p>{JSON.stringify(this.state.data)}</p>
            </section>
        );
    }
}