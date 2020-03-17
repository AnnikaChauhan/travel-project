import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import TestPara from "../component/Main/TestPara/TestPara";
import Login from "../component/Main/LoginPage/Login";

export default class Routes extends Component {
    render(){
        return(
            <Router>
                <Redirect noThrow from="/" to="/" />
                <Login path="blogs" />
                <TestPara path="flights" />
            </Router>
        );
    }
}