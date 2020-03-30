import React, { Component } from "react";
import styles from "../HomePage.module.scss"
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import LogIn from "../Forms/LogIn";
import SignUp from "../Forms/SignUp";
import LogOut from "../Forms/LogOut";

export default class LoggedIn extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="logout" id="uncontrolled-tab-example" className={styles.tabs}>
                <Tab eventKey="login" title="Log In" className={styles.tab}>
                    <LogIn
                        email={this.props.email}
                        password={this.props.password}
                        handleChange={this.props.handleChange}
                        login={this.props.login}
                    />
                </Tab>
                <Tab eventKey="signup" title="Sign Up" className={styles.tab}>
                    <SignUp
                        email={this.props.email}
                        password={this.props.password}
                        handleChange={this.props.handleChange}
                        signup={this.props.signup}
                    />
                </Tab>
                <Tab eventKey="logout" title="Logout" className={styles.tab}>
                    <LogOut
                        logout={this.props.logout}
                    />
                </Tab>
            </Tabs>
        );
    }
}