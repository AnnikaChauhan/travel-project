import React, { Component } from "react";
import styles from "./AboutPage.module.scss";
import Header from "../../Utilities/Header";

export default class TestPara extends Component {
    render() {
        return (
            <div className={styles.aboutPage}>
                <Header hOne={'Thank you for using Explorer!'} hTwo={'Learn more about us...'} />
                <p>This app was built by an aspiring developer to test myself and the skills I have learnt on the _nology course.</p>
                <p>
                    Please note that this app is a work in progress and new features will be added as I learn new skills! You can access the code on  
                        <a href="https://github.com/AnnikaChauhan/travel-project" target="_blank"> GitHub </a> 
                     and see my other work on my personal website 
                        <a href="www.annikachauhan.com" target="_blank"> www.annikachauhan.com</a>.
                </p>
                <p>Weather Data was sourced from OpenWeather & Suggested Venue data was sourced from FourSquare.</p>
                <p>How to use:</p>
                <ul>
                    <li>Log in or sign up to access the content. If you would just like access to the test account please get in touch.</li>
                    <li>Click the blogs section to view yours and other peoples blogs.</li>
                    <li>You can create your own blog posts by clicking the 'New Post' button.</li>
                    <li>On the Explore page you can search any city worldwide to find out about the weather there and also see what the top attractions in that city are.</li>
                </ul>
            </div>
        );
    }
}
