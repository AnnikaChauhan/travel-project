import React, {Component} from "react";
import Button from "../../../Utilities/Button";


export default class LoggedIn extends Component {
    render(){
        return(
            <div>
                <p>You're already logged in!</p>
                <Button text={'Logout'} handleClick={this.props.logout} />
            </div>
        );
    }
}