import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary fixed-top">
                <Link className="navbar-brand" to="/">
                    <b>Profile</b>
                </Link>
                <span className="color-white">
                    <i className="fas fa-check" />
                </span>
            </nav>
        );
    }
}

export default MainNav;
