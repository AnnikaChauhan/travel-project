import React, { Component } from "react";
import Header from "./Header";
import styles from "./Main.module.scss";
import TestPara from "./TestPara/TestPara";
import Login from "./Login/Login";

export default class Main extends Component {
    render() {
        return (
            <div className={styles.main}>
                    <Header />
                    <Login />
                    {/* <TestPara /> */}
            </div>
        );
    }
}