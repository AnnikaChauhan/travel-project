import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import AboutPage from "../component/Main/AboutPage/AboutPage";
import Login from "../component/Main/LoginPage/Login";
import PrivateRoutes from "../Routes/PrivateRoutes";
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

    login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
            console.log(result.user);
        }).catch((error) => {
            console.log(error);
        })
    }

    signup = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
            console.log(result.user);
        }).catch((error) => {
            console.log(error);
        })
    }

    logout = () => {
        firebase.auth().signOut();
    }

    authListener(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({user});
                //localStorage.setItem('user', user.uid);
            } else {
                this.setState({user: null});
                //localStorage.removeItem('user');
            }
        })
    }

    handleChange = (e) => {
       //console.log("changin");
        this.setState({ [e.target.name] : e.target.value });
    }

    componentDidMount(){
        this.authListener();
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
                <PrivateRoutes path="private" user={this.state.user}>
                    {/* everything, blogs & flights should be contained inside private for NOW, the only thing outside is the about page */}
                    <AboutPage path="about" />
                </PrivateRoutes>
            </Router>
        );
    }
}