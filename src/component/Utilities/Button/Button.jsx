import React, {Component} from "react";
import "./Button.module.scss";

export default class Button extends Component {
    render(){
        return(
            <button onClick={this.props.handleClick} >{this.props.text}</button>
        );
    }
}