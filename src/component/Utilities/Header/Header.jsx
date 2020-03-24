import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
    render(){
        return(
            <header className={styles.header}>
                <h1>{this.props.hOne}</h1>
                <h2>{this.props.hTwo}</h2>
            </header>
        );
    }
}

export default Header;