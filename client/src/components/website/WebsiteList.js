import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WebsiteList extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    <Link className="color-white" to="/user/:uid">
                        <i className="fas fa-chevron-left" />
                    </Link>
                    <div className="sw-90-width">
                        <Link
                            className="navbar-brand float-left"
                            to="/user/:uid/website"
                        >
                            <b>Websites</b>
                        </Link>
                    </div>
                    <Link className="color-white" to="/user/:uid/website/new">
                        <i className="fas fa-plus" />
                    </Link>
                </nav>
                <div className="container-fluid">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/user/:uid/website/:wid/page">
                                Address Book App
                            </Link>
                            <Link
                                className="float-right"
                                to="/user/:uid/website/:wid/page/:pid"
                            >
                                <i className="fas fa-cog" />
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/user/:uid/website/:wid/page">
                                Blogger
                            </Link>
                            <Link
                                className="float-right"
                                to="/user/:uid/website/:wid/page/:pid"
                            >
                                <i className="fas fa-cog" />
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/user/:uid/website/:wid/page">
                                Blogging App
                            </Link>
                            <Link
                                className="float-right"
                                to="/user/:uid/website/:wid/page/:pid"
                            >
                                <i className="fas fa-cog" />
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/user/:uid/website/:wid/page">
                                Script Testing App
                            </Link>
                            <Link
                                className="float-right"
                                to="/user/:uid/website/:wid/page/:pid"
                            >
                                <i className="fas fa-cog" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
