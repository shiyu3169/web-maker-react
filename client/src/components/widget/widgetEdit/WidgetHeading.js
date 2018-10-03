import React, { Component } from "react";

export default class WidgetHeading extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light fixed-top bg-light">
                    <a className="color-black" href="Widget-list.html">
                        <i className="fas fa-chevron-left" />
                    </a>
                    <a className="navbar-brand" href="Widget-heading.html">
                        Edit Widget
                    </a>
                    <a className="color-black" href="Widget-list.html">
                        <i className="fas fa-check" />
                    </a>
                </nav>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">
                                <b>Name</b>
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">
                                <b>Text</b>
                            </label>
                            <input
                                type="text"
                                id="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="size">
                                <b>Size</b>
                            </label>
                            <input
                                type="number"
                                id="size"
                                className="form-control"
                            />
                        </div>
                        <a
                            href="Widget-list.html"
                            className="btn btn-danger btn-block"
                        >
                            Delete
                        </a>
                    </form>
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
