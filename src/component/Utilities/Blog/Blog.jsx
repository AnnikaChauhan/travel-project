import React, {Component} from "react";
import styles from "./Blog.module.scss"

export default class Blog extends Component {
    render(){
        return(
            <article className={styles.blog}>
                <p>{this.props.blogData.createdBy}</p>
                <h4>Visited: {this.props.blogData.countryVisited}</h4>
                <p>Thoughts: {this.props.blogData.post}</p>
            </article>
        );
    }
}