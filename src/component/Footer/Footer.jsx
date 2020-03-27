import React, {Component} from "react";
import styles from "./Footer.module.scss";

export default class Footer extends Component {
    render(){
        return(
            <section className={styles.footer}>
                <div>
                    {/* spacer */}
                </div>
                <footer>
                    <p>© Made by Annika Chauhan</p>
                </footer>
            </section>
        );
    }
}