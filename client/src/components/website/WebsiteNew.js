import React, { Component } from "react";

export default class WebsiteNew extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top row nav-height">
                    <div className="col-4 d-none d-sm-block">
                        <Link className="color-white" to="/user/:uid/website">
                            <i className="fas fa-chevron-left" />
                        </Link>
                        <Link
                            className="color-white padding-left"
                            to="/user/:uid/website/:wid/page"
                        >
                            <h5 className="display-inline">Websites</h5>
                        </Link>
                        <Link
                            className="color-white float-right"
                            to="/user/:uid/website/:wid/page/new"
                        >
                            <i className="fas fa-plus" />
                        </Link>
                    </div>
                    <div className="col-sm-8">
                        <Link
                            className="color-white d-sm-none"
                            to="/user/:uid/website"
                        >
                            <i className="fas fa-chevron-left" />
                        </Link>
                        <Link
                            className="color-white padding-left"
                            to="/user/:uid/website/new"
                        >
                            <h5 className="display-inline">New Website</h5>
                        </Link>
                        <Link
                            className="color-white float-right"
                            to="/user/:uid/website"
                        >
                            <i className="fas fa-check" />
                        </Link>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-4 d-none d-sm-block">
                        <div className="container-fluid">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to="/user/:uid/website/:wid/page">
                                        Address Book App
                                    </Link>
                                    <Link
                                        className="float-right"
                                        to="/user/:uid/website/:wid"
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
                                        to="/user/:uid/website/:wid"
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
                                        to="/user/:uid/website/:wid"
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
                                        to="/user/:uid/website/:wid"
                                    >
                                        <i className="fas fa-cog" />
                                    </Link>
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
                                <Link
                                    to="/user/:uid/website"
                                    className="btn btn-lg btn-warning"
                                >
                                    Cancel
                                </Link>
                                <Link
                                    to="/user/:uid/website"
                                    className="btn btn-lg btn-success float-right"
                                >
                                    Submit
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-primary fixed-bottom">
                    <div className="full-width">
                        <Link
                            className="color-white float-right"
                            to="/user/:uid"
                        >
                            <i className="fas fa-user" />
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}
