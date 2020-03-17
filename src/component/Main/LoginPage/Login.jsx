import React, {Component} from "react";
import styles from "./Login.module.scss";
import Button from "../../Utilities/Button";

export default class Login extends Component {
    render(){
        return(
            <div className={styles.login}>
                <h2>Welcome!</h2>
                <p>Sign in for quick and easy access to your account via Google.</p>
                <div>
                    <Button text={'Sign in with Google'} />
                </div>
            </div>
        );
    }
}