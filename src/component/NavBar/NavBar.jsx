import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import NavItem from "./NavItem";

class NavBar extends Component {
    render() {
        return (
            <nav className={styles.navigation}>
                <div>
                    {/* this is basically a filler to seperate the space correctly */}
                </div>
                <ul>
                    <NavItem route="/home" name="Home"/>
                    <NavItem route="explorer/blogs" name="Blogs" />
                    <NavItem route="explorer/explores" name="Explore" />
                    <NavItem route="/about" name="About" />
                </ul>
            </nav>
        );
    }
}

export default NavBar;