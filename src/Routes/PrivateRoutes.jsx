import React, {Component} from "react";
import {globalHistory} from "@reach/router";

export default class PrivateRoutes extends Component {
    render(){
        if(!this.props.user){
            globalHistory.navigate("/home");
            return null;
        } else {
            return this.props.children;
        }
    }
}