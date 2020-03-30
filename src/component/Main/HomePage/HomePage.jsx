import React, { Component } from "react";
import styles from "./HomePage.module.scss";
import Header from "../../Utilities/Header";

import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";

export default class HomePage extends Component {
    render() {
        return (
            <div className={styles.home}>
                <Header hOne={'Explorer'} hTwo={'The place for travel inspiration.'} />
                <div>
                        {
                            this.props.user
                                ? <LoggedIn 
                                    email={this.props.email}
                                    password={this.props.password}
                                    handleChange={this.props.handleChange}
                                    login={this.props.login}
                                    signup={this.props.signup}
                                    logout={this.props.logout}
                                />
                                : <NotLoggedIn
                                    email={this.props.email}
                                    password={this.props.password}
                                    handleChange={this.props.handleChange}
                                    login={this.props.login}
                                    signup={this.props.signup}
                                    logout={this.props.logout} 
                                />
                        }
                </div>
            </div>
        );
    }
}