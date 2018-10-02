import React, { Component } from "react";

export default class WebsiteNew extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top row nav-height">
                    <div className="col-4 d-none d-sm-block">
                        <a className="color-white" href="Website-list.html">
                            <i className="fas fa-chevron-left" />
                        </a>
                        <a className="color-white padding-left" href="#">
                            <h5 className="display-inline">Websites</h5>
                        </a>
                        <a
                            className="color-white float-right"
                            href="Website-new.html"
                        >
                            <i className="fas fa-plus" />
                        </a>
                    </div>
                    <div className="col-sm-8">
                        <a
                            className="color-white d-sm-none"
                            href="Website-list.html"
                        >
                            <i className="fas fa-chevron-left" />
                        </a>
                        <a className="color-white padding-left" href="#">
                            <h5 className="display-inline">New Website</h5>
                        </a>
                        <a
                            className="color-white float-right"
                            href="Website-list.html"
                        >
                            <i className="fas fa-check" />
                        </a>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-4 d-none d-sm-block">
                        <div className="container-fluid">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="../Page/Page-list.html">
                                        Address Book App
                                    </a>
                                    <a
                                        className="float-right"
                                        href="Website-edit.html"
                                    >
                                        <i className="fas fa-cog" />
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="../Page/Page-list.html">Blogger</a>
                                    <a
                                        className="float-right"
                                        href="Website-edit.html"
                                    >
                                        <i className="fas fa-cog" />
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="../Page/Page-list.html">
                                        Blogging App
                                    </a>
                                    <a
                                        className="float-right"
                                        href="Website-edit.html"
                                    >
                                        <i className="fas fa-cog" />
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="../Page/Page-list.html">
                                        Script Testing App
                                    </a>
                                    <a
                                        className="float-right"
                                        href="Website-edit.html"
                                    >
                                        <i className="fas fa-cog" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="container-fluid">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <b>Name</b>
                                    </label>
                                    <input
                                        id="name"
                                        className="form-control"
                                        type="text"
                                        placeholder="Name of the Website"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">
                                        <b>Description</b>
                                    </label>
                                    <textarea
                                        id="description"
                                        rows="5"
                                        className="form-control"
                                        type="text"
                                        placeholder="Describe the Website"
                                    />
                                </div>
                                <a
                                    href="Website-list.html"
                                    className="btn btn-lg btn-warning"
                                >
                                    Cancel
                                </a>
                                <a
                                    href="Website-list.html"
                                    className="btn btn-lg btn-success float-right"
                                >
                                    Submit
                                </a>
                            </form>
                        </div>
                    </div>
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
