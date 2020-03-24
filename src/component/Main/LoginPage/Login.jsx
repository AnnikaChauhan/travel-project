import React, {Component} from "react";
import styles from "./Login.module.scss";
import Header from "../../Utilities/Header";
import ProfilePicture from "../../Utilities/ProfilePicture";
import placeholderPerson from "../../../static/images/person-placeholder.png";

export default class Login extends Component {    
    render(){
        return(
            <div className={styles.login}>
                <Header text={'Explorer'} />
                <h2>Welcome!</h2>
                <div>
                    <p>Sign in or sign up below!</p>
                    <div>
                        <ProfilePicture src={placeholderPerson} alt={'unknown user'} />
                    </div>
                    <br/>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        id="email"
                        value={this.props.email}
                        onChange={this.props.handleChange}
                    />
                    <br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        id="password"
                        value={this.props.password}
                        onChange={this.props.handleChange}
                    />
                    <br/>
                    <div>
                        <button onClick={this.props.login}>Login</button>
                        <button onClick={this.props.signup}>Signup</button>
                    </div>
                    { this.props.user 
                        ? (<p>Logged in</p>) 
                        : (<p>Not Logged In</p>)
                    }
                        <button onClick={this.props.logout}>Logout</button>
                    {/* <Button text={'Sign in with Google'} /> */}
                </div>
            </div>
        );
    }
}