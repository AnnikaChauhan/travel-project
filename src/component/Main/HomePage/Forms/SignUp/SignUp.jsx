import React, {Component} from "react";
import Button from "../../../../Utilities/Button"

//regex to find the @'s and stuff

export default class SignUp extends Component {
    render(){
        return(
            <div>
                <h5>Sign up to view the sites content!</h5>
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    id="emailSU"
                    value={this.props.email}
                    onChange={this.props.handleChange}
                />
                <br/>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="passwordSU"
                    value={this.props.password}
                    onChange={this.props.handleChange}
                />
                <br/>
                <small>Don't worry, we won't share your details.</small>
                <br/>
                <div>
                    <Button text={'Sign Up'} handleClick={this.props.signup} />
                </div>
            </div>
            
        );
    }
}