import React, { Component } from "react";

export default class WebsiteList extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    <a className="color-white" href="../User/Profile.html">
                        <i className="fas fa-chevron-left" />
                    </a>
                    <div className="sw-90-width">
                        <a className="navbar-brand float-left" href="#">
                            <b>Websites</b>
                        </a>
                    </div>
                    <a className="color-white" href="Website-new.html">
                        <i className="fas fa-plus" />
                    </a>
                </nav>
                <div className="container-fluid">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a href="../Page/Page-list.html">
                                Address Book App
                            </a>
                            <a className="float-right" href="Website-edit.html">
                                <i className="fas fa-cog" />
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="../Page/Page-list.html">Blogger</a>
                            <a className="float-right" href="Website-edit.html">
                                <i className="fas fa-cog" />
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="../Page/Page-list.html">Blogging App</a>
                            <a className="float-right" href="Website-edit.html">
                                <i className="fas fa-cog" />
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="../Page/Page-list.html">
                                Script Testing App
                            </a>
                            <a className="float-right" href="Website-edit.html">
                                <i className="fas fa-cog" />
                            </a>
                        </li>
                    </ul>
                </div>
                <nav className="navbar navbar-dark bg-primary fixed-bottom">
                    <div className="full-width">
                        <a
                            className="color-white float-right"
                            href="../User/Profile.html"
                        >
                            <i className="fas fa-user" />
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}
