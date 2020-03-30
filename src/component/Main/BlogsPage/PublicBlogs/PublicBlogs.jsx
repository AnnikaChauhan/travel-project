import React, { Component } from "react";
import Blog from "../../../Utilities/Blog";
import styles from "./PublicBlogs.module.scss";

import { firestore } from "../../../../firebase";

export default class UserBlogs extends Component {
    state = {
        allBlogs: [],
        allOtherBlogs: []
    }

    //can I do a component did mount for several databases at the same time?
    //theres a bug in this with that condition of < or > not showing certain results
    componentDidMount() {
        firestore
            .collection("blogs")
            //.where("createdBy", "<", this.props.user.uid)
            .get()
            .then((result) => {
                const blogs = result.docs.map(doc => doc.data());
                this.setState({ 
                    allBlogs: blogs,
                    allOtherBlogs: blogs
                });
                
            })
    }

    getEmailAddresses = () => {
        firestore
            .collection("users")
            .where("uid", "==", this.props.user.uid)
            .get()
            .then((result) => {
                const users = result.docs.map(doc => doc.data());
                const email = users[0].email;
                //console.log(email)
            })
    }

    filteredBlogs(){
        //this doesn't work lol
        let allOtherBlogs = this.state.allBlogs.filter((blog) => {
            return blog.createdBy.includes(this.props.user.uid);
        })
        this.setState({allOtherBlogs});
    }

    render() {
        //this.filteredBlogs();
        this.getEmailAddresses()
        return (
            <section className={styles.publicBlogs} >
                {this.state.allOtherBlogs.map((blog, index) => (
                    <Blog blogData={blog} key={index} />
                ))}
            </section>
        );
    }
}