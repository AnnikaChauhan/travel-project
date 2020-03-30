import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import LogIn from "../Forms/LogIn";
import SignUp from "../Forms/SignUp";
import LogOut from "../Forms/LogOut";

export default class LoggedIn extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="logout" id="uncontrolled-tab-example">
                <Tab eventKey="login" title="Log In">
                    <LogIn
                        email={this.props.email}
                        password={this.props.password}
                        handleChange={this.props.handleChange}
                        login={this.props.login}
                    />
                </Tab>
                <Tab eventKey="signup" title="Sign Up">
                    <SignUp
                        email={this.props.email}
                        password={this.props.password}
                        handleChange={this.props.handleChange}
                        signup={this.props.signup}
                    />
                </Tab>
                <Tab eventKey="logout" title="Logout" disabled>
                    <LogOut
                        logout={this.props.logout}
                    />
                </Tab>
            </Tabs>
        );
    }
}