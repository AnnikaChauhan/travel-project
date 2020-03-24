import React, {Component} from "react";

export default class NotLoggedIn extends Component {
    render(){
        return(
            <div>
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
                <small>Don't worry, we won't share your details.</small>
                <br/>
                <div>
                    <button onClick={this.props.login}>Login</button>
                    <button onClick={this.props.signup}>Signup</button>
                </div>
            </div>
            
        );
    }
}