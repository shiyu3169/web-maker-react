import React, { Component } from "react";

class Profile extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top">
                    <a className="navbar-brand" href="#">
                        <b>Profile</b>
                    </a>
                    <a className="color-white" href="#">
                        <i className="fas fa-check" />
                    </a>
                </nav>
                <br />
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label>
                                <b>Username</b>
                            </label>
                            <input className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>
                                <b>Email</b>
                            </label>
                            <input className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>
                                <b>First Name</b>
                            </label>
                            <input className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>
                                <b>Last Name</b>
                            </label>
                            <input className="form-control" />
                        </div>
                        <a
                            href="../Website/Website-list.html"
                            className="btn btn-primary btn-block"
                        >
                            Websites
                        </a>
                        <a
                            href="Login.html"
                            className="btn btn-danger btn-block"
                        >
                            Logout
                        </a>
                    </form>
                </div>
            </div>
        );
    }
}

export default Profile;
