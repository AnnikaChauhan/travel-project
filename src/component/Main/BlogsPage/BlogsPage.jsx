import React, {Component} from "react";
import styles from "./BlogsPage.module.scss";
import Header from "../../Utilities/Header";
import Button from "../../Utilities/Button";
import UserBlogs from "./UserBlogs";
import PublicBlogs from "./PublicBlogs";

export default class BlogsPage extends Component {
    render(){
        return(
            <section className={styles.blogsPage}>
                <Header hOne={"Blogs by Explorers"} hTwo={"Read about other Explorer's travels, or write about your own!"} />
                <hr/>
                <h3>Your Blogs</h3>
                <div>
                    <UserBlogs user={this.props.user} />
                </div>
                <hr/>
                <h3>Blogs by all Explorers</h3>
                <div>
                    <PublicBlogs user={this.props.user} />
                </div>
            </section>
        );
    }
}