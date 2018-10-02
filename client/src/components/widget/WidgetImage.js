import React, { Component } from "react";

export default class WidgetImage extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light fixed-top bg-light">
                    <a class="color-black" href="Widget-list.html">
                        <i class="fas fa-chevron-left" />
                    </a>
                    <a class="navbar-brand" href="Widget-heading.html">
                        Edit Widget
                    </a>
                    <a class="color-black" href="Widget-list.html">
                        <i class="fas fa-check" />
                    </a>
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
                        <a
                            href="Widget-list.html"
                            class="btn btn-danger btn-block"
                        >
                            Delete
                        </a>
                    </form>
                </div>
                <footer class="navbar navbar-light fixed-bottom bg-light">
                    <div class="full-width">
                        <a
                            class="color-black float-right"
                            href="../User/Profile.html"
                        >
                            <i class="fas fa-user" />
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}
