import React, {Component} from "react";
import Button from "../../../../Utilities/Button";


export default class LogOut extends Component {
    render(){
        return(
            <div>
                <h5>You're already logged in!</h5>
                <Button text={'Logout'} handleClick={this.props.logout} />
            </div>
        );
    }
}