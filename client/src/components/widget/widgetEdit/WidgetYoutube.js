import React, { Component } from "react";

export default class WidgetYoutube extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light fixed-top bg-light">
                    <Link
                        className="color-black"
                        to="/user/:uid/website/:wid/page/:pid/widget"
                    >
                        <i className="fas fa-chevron-left" />
                    </Link>
                    <Link
                        className="navbar-brand"
                        to="/user/:uid/website/:wid/page/:pid/widget/:wgid"
                    >
                        Edit Widget
                    </Link>
                    <Link
                        className="color-black"
                        to="/user/:uid/website/:wid/page/:pid/widget"
                    >
                        <i className="fas fa-check" />
                    </Link>
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
                            <label htmlFor="url">
                                <b>Url</b>
                            </label>
                            <input
                                type="text"
                                id="url"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="width">
                                <b>Width</b>
                            </label>
                            <input
                                type="text"
                                id="width"
                                className="form-control"
                            />
                        </div>
                        <Link
                            to="/user/:uid/website/:wid/page/:pid/widget"
                            className="btn btn-danger btn-block"
                        >
                            Delete
                        </Link>
                    </form>
                </div>
                <footer className="navbar navbar-light fixed-bottom bg-light">
                    <div className="full-width">
                        <Link
                            className="color-black float-right"
                            to="/user/:uid"
                        >
                            <i className="fas fa-user" />
                        </Link>
                    </div>
                </footer>
            </div>
        );
    }
}
