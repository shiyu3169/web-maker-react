import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../layout/InputGroup";

export default class WebsiteEdit extends Component {
    render() {
        const { uid } = this.props.match.params;
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top row nav-height">
                    <div className="col-4 d-none d-sm-block">
                        <Link
                            className="color-white"
                            to={`/user/${uid}/website`}
                        >
                            <i className="fas fa-chevron-left" />
                        </Link>
                        <span className="color-white padding-left">
                            <h5 className="display-inline">Websites</h5>
                        </span>
                        <Link
                            className="color-white float-right"
                            to={`/user/${uid}/website/new`}
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
                            to="/user/:uid/website/:wid"
                        >
                            <h5 className="display-inline">Edit Website</h5>
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
                                <InputGroup
                                    name="name"
                                    label="Name"
                                    type="text"
                                    placeholder="Enter to Edit Website Name..."
                                />
                                <InputGroup
                                    name="description"
                                    label="Description"
                                    type="text"
                                    rows="5"
                                    placeholder="Enter to Edit Website Description..."
                                />
                                <Link
                                    to="/user/:uid/website"
                                    className="btn btn-lg btn-warning"
                                >
                                    Cancel
                                </Link>
                                <Link
                                    to="/user/:uid/website"
                                    className="btn btn-lg btn-danger float-right"
                                >
                                    Delete
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
