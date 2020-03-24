import React, { Component } from "react";
import styles from "./Main.module.scss";
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