import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import AboutPage from "../component/Main/AboutPage/AboutPage";
import Login from "../component/Main/LoginPage/Login";
import firebase from "../firebase";

export default class Routes extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
            email: '',
            password: ''
        }
    }

    login = () =>{
        console.log("loggin in");
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log('logged in')
        }).catch((error) => {
            console.log(error);
        })
    }

    signup = () =>{
        console.log("signin up");
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {

        }).catch((error) => {
            console.log(error);
        })
    }

    logout = () => {
        firebase.auth().signOut();
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if(user){
                this.setState({user});
                //retrives the uid
                //localStorage.setItem('user', user.uid);
            } else {
                this.setState({user: null});
                //localStorage.removeItem('user');
            }
        })
    }

    handleChange = (e) => {
        console.log("changin");
        this.setState({ [e.target.name] : e.target.value });
    }

    render(){
        return(
            <Router>
                <Redirect noThrow from="/" to="/home" />
                <Login 
                    path="/home"
                    email={this.state.email}
                    password={this.state.password}
                    handleChange={this.handleChange}
                    login={this.login}
                    signup={this.signup}
                    logout={this.logout}
                    user={this.state.user}
                />
                <AboutPage path="about" />
            </Router>
        );
    }
}