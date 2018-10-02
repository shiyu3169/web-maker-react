import React, { Component } from "react";

export default class PageEdit extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light fixed-top bg-light">
                    <a className="color-black" href="Page-list.html">
                        <i className="fas fa-chevron-left" />
                    </a>
                    <a className="navbar-brand" href="Page-new.html">
                        Edit Page
                    </a>
                    <a className="color-black" href="Page-list.html">
                        <i className="fas fa-check" />
                    </a>
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
                        <a
                            href="Page-list.html"
                            className="btn btn-lg btn-warning"
                        >
                            Cancel
                        </a>
                        <a
                            href="Page-list.html"
                            className="btn btn-lg btn-danger float-right"
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
