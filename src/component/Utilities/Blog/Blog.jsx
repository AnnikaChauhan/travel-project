import React, {Component} from "react";
import styles from "./Blog.module.scss";
import { firestore } from "../../../firebase";

export default class Blog extends Component {
    state = {
        users: []
    }

    getEmailAddresses = () => {
        firestore
            .collection("users")
            .where("uid","==",this.props.blogData.createdBy)
            .get()
            .then((result) => {
                const emailAddress = result.docs.map(doc => doc.data())[0].email;
                console.log(emailAddress);
                return (<p>{emailAddress}</p>)
            })
    }

    render(){
        //this.getEmailAddresses();
        return(
            <article className={styles.blog}>
                {/* <p>{this.getEmailAddresses()}</p> */}
                <p>{this.props.blogData.createdBy}</p>
                {this.getEmailAddresses()}
                <h4>Visited: {this.props.blogData.countryVisited}</h4>
                <p>Thoughts: {this.props.blogData.post}</p>
            </article>
        );
    }
}