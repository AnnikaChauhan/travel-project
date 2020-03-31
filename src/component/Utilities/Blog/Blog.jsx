import React, { Component } from "react";
import styles from "./Blog.module.scss";
import { firestore } from "../../../firebase";
import Card from 'react-bootstrap/Card';

export default class Blog extends Component {
    state = {
        blogData: {}
    }

    componentDidMount() {
        firestore
            .collection("users")
            .where("uid", "==", this.props.blogData.createdBy)
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

    render() {
        return (
            <Card
                bg={'light'}
                text={'dark'}
                className={styles.blog}
            >
                <Card.Header>{this.state.blogData.email}</Card.Header>
                <Card.Body>
                    <Card.Title> {this.state.blogData.countryVisited} </Card.Title>
                    <Card.Text>
                        {this.state.blogData.post}
              </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}