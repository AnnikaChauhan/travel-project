import React, {Component} from "react";

export default class LoggedIn extends Component {
    render(){
        return(
            <div>
                <p>You're already logged in!</p>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        );
    }
}