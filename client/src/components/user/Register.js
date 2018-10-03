import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../layout/InputGroup";

export default class Register extends Component {
    render() {
        return (
            <div className="container">
                <h1>Register</h1>
                <form>
                    <InputGroup
                        name="username"
                        label="Username"
                        type="text"
                        placeholder="Enter your username..."
                    />
                    <InputGroup
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Enter your password..."
                    />
                    <InputGroup
                        name="verifyPassword"
                        label="Verify Password"
                        type="password"
                        placeholder="Verify your password..."
                    />
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
