import React, {Component} from "react";
import {globalHistory} from "@reach/router";
import styles from "./BlogsPage.module.scss";
import Header from "../../Utilities/Header";
import Button from "../../Utilities/Button";
import UserBlogs from "./UserBlogs";
import PublicBlogs from "./PublicBlogs";

export default class BlogsPage extends Component {
    newPostButtonClick = () => {
        globalHistory.navigate("/explorer/blogs/new");
    }

    render(){
        return(
            <section className={styles.blogsPage}>
                <Header hOne={"Blogs by Explorers"} hTwo={"Read about other Explorer's travels, or write about your own!"} />
                {/* <hr/> */}
                <div>
                    <h3>Your Blogs</h3>
                    <Button text={'New Post'} handleClick={this.newPostButtonClick}/>
                </div>
                <article>
                    <UserBlogs user={this.props.user} />
                </article>
                {/* <hr/> */}
                <div>
                    <h3>Blogs by all Explorers</h3>
                </div>
                <article>
                    <PublicBlogs user={this.props.user} />
                </article>
            </section>
        );
    }
}