import React, { Component } from "react";

export default class PageList extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light fixed-top bg-light">
                    <a
                        className="color-black"
                        href="../Website/Website-list.html"
                    >
                        <i className="fas fa-chevron-left" />
                    </a>
                    <a className="navbar-brand" href="Page-list.html">
                        Pages
                    </a>
                    <a className="color-black" href="Page-new.html">
                        <i className="fas fa-plus" />
                    </a>
                </nav>
                <div className="container">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a href="../Widget/Widget-list.html">Blog Post</a>
                            <a className="float-right" href="Page-edit.html">
                                <i className="fas fa-cog" />
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="../Widget/Widget-list.html">Blogs </a>
                            <a className="float-right" href="Page-edit.html">
                                <i className="fas fa-cog" />
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="../Widget/Widget-list.html">Home</a>
                            <a className="float-right" href="Page-edit.html">
                                <i className="fas fa-cog" />
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="../Widget/Widget-list.html">About</a>
                            <a className="float-right" href="Page-edit.html">
                                <i className="fas fa-cog" />
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="../Widget/Widget-list.html">Contact Us</a>
                            <a className="float-right" href="Page-edit.html">
                                <i className="fas fa-cog" />
                            </a>
                        </li>
                    </ul>
                </div>
                <footer className="navbar navbar-light fixed-bottom bg-light">
                    <div className="full-width">
                        <a
                            className="color-black float-right"
                            href="../User/Profile.html"
                        >
                            <i className="fas fa-user" />
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}
