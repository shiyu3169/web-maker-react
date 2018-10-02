import React, { Component } from "react";

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
                    <a
                        href="Profile.html"
                        className="btn btn-primary btn-block"
                    >
                        Login
                    </a>
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
