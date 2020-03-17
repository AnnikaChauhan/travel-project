import React, {Component} from "react";
import styles from "./Login.module.scss";

export default class Login extends Component {
    render(){
        return(
            <div className={styles.login}>
                <h2>Welcome!</h2>
                <p>Sign in via google to access your account.</p>
                <div>
                    <button>Sign in with Google</button>
                </div>
            </div>
        );
    }
}