import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className="container">
                <h1>Login</h1>
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
                            class="form-control"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <Link to="/user" className="btn btn-primary btn-block">
                        Login
                    </Link>
                    <a
                        href="Register.html"
                        className="btn btn-success btn-block"
                    >
                        Register
                    </a>
                </form>
            </div>
        );
    }
}

export default Login;
