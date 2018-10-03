import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../layout/InputGroup";

class Login extends Component {
    render() {
        return (
            <div className="container">
                <h1>Login</h1>
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
                    <Link to="/user/:uid" className="btn btn-primary btn-block">
                        Login
                    </Link>
                    <Link to="/register" className="btn btn-success btn-block">
                        Register
                    </Link>
                </form>
            </div>
        );
    }
}

export default Login;
