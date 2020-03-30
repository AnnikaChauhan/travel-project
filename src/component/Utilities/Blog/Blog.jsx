import React, {Component} from "react";
import styles from "./Blog.module.scss";
import { firestore } from "../../../firebase";

export default class Blog extends Component {
    state = {
        blogData: {}
    }

    componentDidMount() {
        firestore
            .collection("users")
            .where("uid","==",this.props.blogData.createdBy)
            .get()
            .then((result) => {
                const email = result.docs[0].data().email
                this.setState({ 
                    blogData: {
                        ...this.props.blogData,
                        email
                    }
                 })
            })
    }

    render(){
        //this.getEmailAddresses();
        return(
            <article className={styles.blog}>
                <p>{this.state.blogData.email}</p>
                <h4>Visited: {this.state.blogData.countryVisited}</h4>
                <p>Thoughts: {this.state.blogData.post}</p>
            </article>
        );
    }
}