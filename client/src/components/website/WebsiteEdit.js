import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../layout/InputGroup";

export default class WebsiteEdit extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-primary fixed-top row nav-height">
                    <div class="col-4 d-none d-sm-block">
                        <Link class="color-white" to="/user/:uid/website">
                            <i class="fas fa-chevron-left" />
                        </Link>
                        <Link class="color-white padding-left" to="#">
                            <h5 class="display-inline">Websites</h5>
                        </Link>
                        <Link
                            class="color-white float-right"
                            to="/user/:uid/website/new"
                        >
                            <i class="fas fa-plus" />
                        </Link>
                    </div>
                    <div class="col-sm-8">
                        <Link
                            class="color-white d-sm-none"
                            to="/user/:uid/website"
                        >
                            <i class="fas fa-chevron-left" />
                        </Link>
                        <Link
                            class="color-white padding-left"
                            to="/user/:uid/website/:wid"
                        >
                            <h5 class="display-inline">Edit Website</h5>
                        </Link>
                        <Link
                            class="color-white float-right"
                            to="/user/:uid/website"
                        >
                            <i class="fas fa-check" />
                        </Link>
                    </div>
                </nav>
                <div class="row">
                    <div class="col-4 d-none d-sm-block">
                        <div class="container-fluid">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <Link to="/user/:uid/website/:wid/page">
                                        Address Book App
                                    </Link>
                                    <Link
                                        class="float-right"
                                        to="/user/:uid/website/:wid"
                                    >
                                        <i class="fas fa-cog" />
                                    </Link>
                                </li>
                                <li class="list-group-item">
                                    <Link to="/user/:uid/website/:wid/page">
                                        Blogger
                                    </Link>
                                    <Link
                                        class="float-right"
                                        to="/user/:uid/website/:wid"
                                    >
                                        <i class="fas fa-cog" />
                                    </Link>
                                </li>
                                <li class="list-group-item">
                                    <Link to="/user/:uid/website/:wid/page">
                                        Blogging App
                                    </Link>
                                    <Link
                                        class="float-right"
                                        to="/user/:uid/website/:wid"
                                    >
                                        <i class="fas fa-cog" />
                                    </Link>
                                </li>
                                <li class="list-group-item">
                                    <Link to="/user/:uid/website/:wid/page">
                                        Script Testing App
                                    </Link>
                                    <Link
                                        class="float-right"
                                        to="/user/:uid/website/:wid"
                                    >
                                        <i class="fas fa-cog" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="container-fluid">
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
                                    class="btn btn-lg btn-warning"
                                >
                                    Cancel
                                </Link>
                                <Link
                                    to="/user/:uid/website"
                                    class="btn btn-lg btn-danger float-right"
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
