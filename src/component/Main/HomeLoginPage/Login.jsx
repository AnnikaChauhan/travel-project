import React, { Component } from "react";
import styles from "./Login.module.scss";
import Header from "../../Utilities/Header";
import ProfilePicture from "../../Utilities/ProfilePicture";
import placeholderPerson from "../../../static/images/person-placeholder.png";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";

export default class Login extends Component {
    render() {
        return (
            <div className={styles.login}>
                <Header hOne={'Explorer'} hTwo={'The place for travel inspiration.'} />
                <div>
                    {
                        this.props.user
                            ? (<h3>Welcome {this.props.user.email}!</h3>)
                            : (<div>
                                    <h2>Welcome!</h2>
                                    <p>Sign in or sign up to access content.</p>
                                </div>)
                    }
                    <div>
                        <ProfilePicture src={placeholderPerson} alt={'unknown user'} />
                    </div>
                    <br />
                    {
                        this.props.user
                            ? (<LoggedIn
                                    logout={this.props.logout}
                                />)
                            : (<NotLoggedIn
                                    email={this.props.email}
                                    password={this.props.password}
                                    handleChange={this.props.handleChange}
                                    login={this.props.login}
                                    signup={this.props.signup}
                                />)
                    }
                </div>
            </div>
        );
    }
}