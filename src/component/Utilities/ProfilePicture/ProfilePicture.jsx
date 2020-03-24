import React, {Component} from "react";
import "./ProfilePicture.module.scss";

export default class ProfilePicture extends Component {
    render(){
        return(
            <img src={this.props.src} alt={this.props.alt}/>
        );
    }
}
