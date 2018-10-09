import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary fixed-top">
                <Link className="navbar-brand" to="/">
                    <b>Profile</b>
                </Link>
                <button
                    form="myForm"
                    className="btn color-white bg-transparent"
                >
                    <i className="fas fa-check" />
                </button>
            </nav>
        );
    }
}

export default MainNav;
