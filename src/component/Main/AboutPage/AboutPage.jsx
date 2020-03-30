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
                <p>How to use:</p>
            </div>
        );
    }
}
