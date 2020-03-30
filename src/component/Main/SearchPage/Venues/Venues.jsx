import React, { Component } from "react";
import styles from "./Venues.module.scss";

export default class VenueCards extends Component {
    render() {
        return (
            <section className={styles.venues}>
                {this.props.venueData.map((venue, index) => {
                    return <article className={styles.venue} key={index}>
                        <h3>{venue.venue.name}</h3>
                        <p>Category: {venue.venue.categories[0].name}</p>
                    </article>
                })}
            </section>

        );
    }
}