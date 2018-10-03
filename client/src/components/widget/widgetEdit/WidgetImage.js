import React, { Component } from "react";

export default class WidgetImage extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light fixed-top bg-light">
                    <Link
                        class="color-black"
                        to="/user/:uid/website/:wid/page/:pid/widget"
                    >
                        <i class="fas fa-chevron-left" />
                    </Link>
                    <Link
                        class="navbar-brand"
                        to="/user/:uid/website/:wid/page/:pid/widget/:wgid"
                    >
                        Edit Widget
                    </Link>
                    <Link
                        class="color-black"
                        to="/user/:uid/website/:wid/page/:pid/widget"
                    >
                        <i class="fas fa-check" />
                    </Link>
                </nav>
                <div class="container">
                    <form>
                        <div class="form-group">
                            <label htmlFor="name">
                                <b>Name</b>
                            </label>
                            <input type="text" id="name" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="url">
                                <b>Url</b>
                            </label>
                            <input type="text" id="url" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="width">
                                <b>Width</b>
                            </label>
                            <input
                                type="text"
                                id="width"
                                class="form-control"
                            />
                        </div>
                        <Link
                            to="/user/:uid/website/:wid/page/:pid/widget"
                            class="btn btn-danger btn-block"
                        >
                            Delete
                        </Link>
                    </form>
                </div>
                <footer class="navbar navbar-light fixed-bottom bg-light">
                    <div class="full-width">
                        <Link class="color-black float-right" to="/user/:uid">
                            <i class="fas fa-user" />
                        </Link>
                    </div>
                </footer>
            </div>
        );
    }
}
