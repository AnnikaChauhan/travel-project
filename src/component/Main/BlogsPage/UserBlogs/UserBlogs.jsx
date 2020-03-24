import React, {Component} from "react";
import styles from "./UserBlogs.module.scss";
import Blog from "../../../Utilities/Blog";

import {firestore} from "../../../../firebase";

export default class UserBlogs extends Component {
    state = {
        myBlogs: []
    }

    componentDidMount(){
        firestore
            .collection("blogs")
            .where("createdBy", "==", this.props.user.uid)
            .get()
            .then((result) => {
                const myBlogs = result.docs.map(doc => doc.data());
                this.setState({ myBlogs });
            })
    }

    render(){
        return(
            <section className={styles.userBlogs}>
                {this.state.myBlogs.map((blog, index) => (
                    <Blog blogData={blog} key={index} />
                ))}
            </section>
        );
    }
}