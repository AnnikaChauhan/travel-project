import React, {Component} from "react";
import styles from "./CreateNewBlogPost.module.scss";
import Header from "../../../Utilities/Header";

import { firestore } from "../../../../firebase";

export default class CreateNewBlogPost extends Component {
    state = {
        formData: {
            post: "",
            countryVisited: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value
            }
        })
    }

    //the commented out bit is for when you want to make blogs a subcollection of users, once you figure out how to extract all/call the relevant userID
    handleSubmit = (event) => {
        event.preventDefault();
        firestore
            // .collection("users")
            // .doc(this.props.user.uid)
            .collection("blogs")
            .add({
                ...this.state.formData,
                createdBy: this.props.user.uid
            })
            .then(() => {
                this.setState({
                    post: "",
                    countryVisited: ""
                })

                console.log('form submitted');
            })
    }

    render(){
        //console.log(this.props.user);
        return(
            <section className={styles.createPost}>
                <Header hOne={'Create a New Post'} hTwo={'Add a new blog post to your collection!'} />
                <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Blog Post"
                    name="post"
                    id="post"
                    value={this.state.formData.name}
                    onChange={this.handleInputChange}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Country Visited"
                    name="countryVisited"
                    value={this.state.formData.countryVisited}
                    onChange={this.handleInputChange}
                />
                <br/>
                <input type="submit" value="Submit" />
                </form>
            </section>
        );
    }
}