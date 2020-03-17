import React, {Component} from "react";
import styles from "./Login.module.scss";
import Button from "../../Utilities/Button";

export default class Login extends Component {
    render(){
        return(
            <div className={styles.login}>
                <h2>Welcome!</h2>
                <div>
                    <p>Sign in via Google for quick and easy access to your account.</p>
                    <Button text={'Sign in with Google'} />
                </div>
                {/* <p>Alternatively, sign up directly for an account by providing an email address and password.</p> */}
                {/* inputs and sign up button */}
            </div>
        );
    }
}