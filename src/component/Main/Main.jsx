import React, { Component } from "react";
import Header from "./Header";
import styles from "./Main.module.scss";
import TestPara from "./TestPara/TestPara";

export default class Main extends Component {
    render() {
        return (
            <div className={styles.main}>
                    <Header />
                    <TestPara />
            </div>
        );
    }
}