import React, { Component } from "react";
import styles from "./Venues.module.scss";
import Card from 'react-bootstrap/Card';

export default class VenueCards extends Component {
    render() {
        return (
            <section className={styles.venues}>
                {this.props.venueData.map((venue, index) => {
                    return <Card
                        bg={'light'}
                        text={'dark'}
                        className={styles.venue}
                        key={index}
                    >
                        <Card.Header>{venue.venue.name}</Card.Header>
                        <Card.Body>
                        <Card.Title>{venue.venue.categories[0].name}</Card.Title>
                            {/* <Card.Text>

                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                })}
            </section>

        );
    }
}