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
                        color: isCurrent ? "white" : "#231C42" 
                    }
                }
            } }
            to={this.props.route}>
                {this.props.name}
            </Link>
        );
    }
}