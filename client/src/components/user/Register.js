import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                    <Link to="/user/:uid" className="btn btn-primary btn-block">
                        Register
                    </Link>
                    <Link to="/login" className="btn btn-danger btn-block">
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }
}
