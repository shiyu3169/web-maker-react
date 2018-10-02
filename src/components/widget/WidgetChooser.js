import React, { Component } from "react";

export default class WidgetChooser extends Component {
    render() {
        return (
            <div>
                <nav className="navbar-light fixed-top bg-light">
                    <a className="color-black" href="Widget-list.html">
                        <i className="fas fa-chevron-left" />
                    </a>
                    <a
                        className="navbar-brand padding-left"
                        href="Widget-chooser.html"
                    >
                        Choose Widget
                    </a>
                </nav>
                <div className="container">
                    <ul className="list-group-flush">
                        <li className="list-group-item">
                            <a href="Widget-heading.html">Heading</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Label</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Text Input</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Link</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Button</a>
                        </li>
                        <li className="list-group-item">
                            <a href="Widget-image.html">Image</a>
                        </li>
                        <li className="list-group-item">
                            <a href="Widget-youtube.html">Youtube</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Data Table</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Repeater</a>
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
