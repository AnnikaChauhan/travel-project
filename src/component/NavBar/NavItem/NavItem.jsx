import React, {Component} from "react";
import "./NavItem.module.scss";
import {Link} from "@reach/router";

export default class NavItem extends Component {
    
    render(props){
        return(
            <Link 
            {...props}
            getProps={ ({ isCurrent }) => {
                return {
                    style: {
                        color: isCurrent ? "#E1AD01" : "white" 
                    }
                }
            } }
            to={this.props.route}>
                {this.props.name}
            </Link>
        );
    }
}