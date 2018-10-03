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
