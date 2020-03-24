import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import AboutPage from "../component/Main/AboutPage/AboutPage";
import HomeLoginPage from "../component/Main/HomeLoginPage";
import BlogsPage from "../component/Main/BlogsPage";
import CreateNewBlogPost from "../component/Main/CreateNewBlogPost";

import PrivateRoutes from "../Routes/PrivateRoutes";
import firebase, {firestore} from "../firebase";

export default class Routes extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
            email: '',
            password: '',
            userFormData: {
                uid: '',
                email: ''
            }
        }
    }

    login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
            console.log(result.user);
        }).catch((error) => {
            console.log(error);
        })
    }

    //can sign up push data into the users database??
    signup = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
            firestore
                .collection("users")
                .add({
                    email: this.state.email,
                    userUID: result.user.uid
                })
                .then(() => {
                    console.log('this user has also been added to the database');
                })
        }).catch((error) => {
            console.log(error);
        })
    }

    logout = () => {
        firebase.auth().signOut();
    }

    addUserToUserDatabase(){

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
                <HomeLoginPage 
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
                <PrivateRoutes path="private" user={this.state.user}>
                    {/* everything, blogs & flights should be contained inside private for NOW, the only thing outside is the about page */}
                    <BlogsPage
                        path="blogs" 
                        user={this.state.user}
                     />
                     <CreateNewBlogPost
                        path="blogs/new"
                        user={this.state.user}
                     />
                </PrivateRoutes>
            </Router>
        );
    }
}