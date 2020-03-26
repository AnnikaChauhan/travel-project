import React, {Component} from "react";
import styles from "./SearchBar.module.scss";

export default class SearchBar extends Component {
    render(){
        return(
            <div className={styles.searchbar}>
                <input 
                    type="text" 
                    name="search" 
                    id="search"
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                />
                <button 
                    type="submit"
                    onClick={this.props.handleClick}
                >
                Search</button>
            </div>
        );
    }
}