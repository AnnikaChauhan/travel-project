import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
    render(){
        return(
            <header className={styles.header}>
                <h1>{this.props.text}</h1>
            </header>
        );
    }
}

export default Header;