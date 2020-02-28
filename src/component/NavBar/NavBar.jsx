import React, { Component } from "react";
import styles from "./NavBar.module.scss";

class NavBar extends Component {
    render() {
        return (
            <nav className={styles.navigation}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Profile</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;