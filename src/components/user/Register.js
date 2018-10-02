import React, { Component } from "react";

export default class Register extends Component {
    render() {
        return (
            <div className="container">
                <h1>Register</h1>
                <form>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Verify Password"
                        />
                    </div>
                    <a
                        href="Profile.html"
                        className="btn btn-primary btn-block"
                    >
                        Register
                    </a>
                    <a href="Login.html" className="btn btn-danger btn-block">
                        Cancel
                    </a>
                </form>
            </div>
        );
    }
}
