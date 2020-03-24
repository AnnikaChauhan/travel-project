import React, {Component} from "react";
import "./Button.module.scss";

export default class Button extends Component {
    render(){
        return(
            <button>{this.props.text}</button>
        );
    }
}