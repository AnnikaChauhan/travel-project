import React, { Component } from "react";
import Header from "../Utilities/Header";
import styles from "./Main.module.scss";
import TestPara from "./TestPara/TestPara";
import Login from "./LoginPage/Login";
import Routes from "../../Routes/Routes";

export default class Main extends Component {
    render() {
        return (
            <div className={styles.main}>
                    <Routes />
            </div>
        );
    }
}