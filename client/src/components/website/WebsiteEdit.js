import React, { Component } from "react";

export default class WebsiteEdit extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-primary fixed-top row nav-height">
                    <div class="col-4 d-none d-sm-block">
                        <a class="color-white" href="Website-list.html">
                            <i class="fas fa-chevron-left" />
                        </a>
                        <a class="color-white padding-left" href="#">
                            <h5 class="display-inline">Websites</h5>
                        </a>
                        <a
                            class="color-white float-right"
                            href="Website-new.html"
                        >
                            <i class="fas fa-plus" />
                        </a>
                    </div>
                    <div class="col-sm-8">
                        <a
                            class="color-white d-sm-none"
                            href="Website-list.html"
                        >
                            <i class="fas fa-chevron-left" />
                        </a>
                        <a class="color-white padding-left" href="#">
                            <h5 class="display-inline">Edit Website</h5>
                        </a>
                        <a
                            class="color-white float-right"
                            href="Website-list.html"
                        >
                            <i class="fas fa-check" />
                        </a>
                    </div>
                </nav>
                <div class="row">
                    <div class="col-4 d-none d-sm-block">
                        <div class="container-fluid">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <a href="../Page/Page-list.html">
                                        Address Book App
                                    </a>
                                    <a
                                        class="float-right"
                                        href="Website-edit.html"
                                    >
                                        <i class="fas fa-cog" />
                                    </a>
                                </li>
                                <li class="list-group-item">
                                    <a href="../Page/Page-list.html">Blogger</a>
                                    <a
                                        class="float-right"
                                        href="Website-edit.html"
                                    >
                                        <i class="fas fa-cog" />
                                    </a>
                                </li>
                                <li class="list-group-item">
                                    <a href="../Page/Page-list.html">
                                        Blogging App
                                    </a>
                                    <a
                                        class="float-right"
                                        href="Website-edit.html"
                                    >
                                        <i class="fas fa-cog" />
                                    </a>
                                </li>
                                <li class="list-group-item">
                                    <a href="../Page/Page-list.html">
                                        Script Testing App
                                    </a>
                                    <a
                                        class="float-right"
                                        href="Website-edit.html"
                                    >
                                        <i class="fas fa-cog" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="container-fluid">
                            <form>
                                <div class="form-group">
                                    <label htmlFor="name">
                                        <b>Name</b>
                                    </label>
                                    <input
                                        id="name"
                                        class="form-control"
                                        type="text"
                                        placeholder="Name of the Website"
                                        value="Blogger"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="description">
                                        <b>Description</b>
                                    </label>
                                    <textarea
                                        id="description"
                                        rows="5"
                                        class="form-control"
                                        type="text"
                                        placeholder="Describe the Website"
                                    >
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Maxime aut sequi qui,
                                        quisquam cupiditate repellat, aliquam
                                        doloremque tempora blanditiis facilis
                                        assumenda incidunt reprehenderit non
                                        dicta tempore iste labore dolor?
                                        Provident!
                                    </textarea>
                                </div>
                                <a
                                    href="Website-list.html"
                                    class="btn btn-lg btn-warning"
                                >
                                    Cancel
                                </a>
                                <a
                                    href="Website-list.html"
                                    class="btn btn-lg btn-danger float-right"
                                >
                                    Delete
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-primary fixed-bottom">
                    <div class="full-width">
                        <a
                            class="color-white float-right"
                            href="../User/Profile.html"
                        >
                            <i class="fas fa-user" />
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}
