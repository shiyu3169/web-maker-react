import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageEdit extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light fixed-top bg-light">
                    <Link
                        className="color-black"
                        to="/user/:uid/website/:wid/page"
                    >
                        <i className="fas fa-chevron-left" />
                    </Link>
                    <Link
                        className="navbar-brand"
                        to="/user/:uid/website/:wid/page/:pid"
                    >
                        Edit Page
                    </Link>
                    <Link
                        className="color-black"
                        to="/user/:uid/website/:wid/page"
                    >
                        <i className="fas fa-check" />
                    </Link>
                </nav>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label for="name">
                                <b>Name</b>
                            </label>
                            <input
                                className="form-control"
                                id="name"
                                type="text"
                                placeholder="Name of the page..."
                                value="Blog Post"
                            />
                        </div>
                        <div className="form-group">
                            <label for="title">
                                <b>Title</b>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="title"
                                placeholder="Title of the page..."
                                value="Blog Post"
                            />
                        </div>
                        <Link
                            to="/user/:uid/website/:wid/page"
                            className="btn btn-lg btn-warning"
                        >
                            Cancel
                        </Link>
                        <Link
                            to="/user/:uid/website/:wid/page"
                            className="btn btn-lg btn-danger float-right"
                        >
                            Delete
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}
