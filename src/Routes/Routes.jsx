import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";

export default class Routes extends Component {
    render(){
        return(
            <Router>
                <Redirect noThrow from="/" to="home"/>
                
            </Router>
        );
    }
}