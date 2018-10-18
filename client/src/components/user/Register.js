import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../layout/InputGroup";
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions";
import PropTypes from "prop-types";

class Register extends Component {
    state = {
        username: "",
        password: "",
        verifyPassword: ""
        // errors: {}
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const { username, password, verifyPassword } = this.state;

        // Check errors
        if (username === "") {
            this.setState({
                errors: { username: "Username is required" }
            });
            return;
        }

        if (password === "") {
            this.setState({
                errors: { password: "Password is required" }
            });
            return;
        }

        if (verifyPassword === "") {
            this.setState({
                errors: { verifyPassword: "Verify Password is required" }
            });
            return;
        }

        if (verifyPassword !== password) {
            this.setState({
                errors: {
                    match: "Password and Verify Passwrd are not match"
                }
            });
            return;
        }

        const user = { username, password };
        // fetch request
        this.props.addUser(user).then(() => {
            if (!this.props.error.type && this.props.users.length > 0) {
                this.props.history.push(`/user/${this.props.users[0]._id}`);
            }
        });
    };

    render() {
        const { error } = this.props;

        return (
            <div className="container">
                <h1>Register</h1>
                {this.props.error &&
                    this.props.error.type === "match" && (
                        <div className="alert alert-danger">
                            {error.message}
                        </div>
                    )}
                <form onSubmit={this.onSubmit}>
                    <InputGroup
                        name="username"
                        label="Username"
                        type="text"
                        placeholder="Enter your username..."
                        onChange={this.onChange}
                        // error={errors.username}
                    />
                    <InputGroup
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Enter your password..."
                        onChange={this.onChange}
                        // error={errors.password}
                    />
                    <InputGroup
                        name="verifyPassword"
                        label="Verify Password"
                        type="password"
                        placeholder="Verify your password..."
                        onChange={this.onChange}
                        // error={errors.verifyPassword}
                    />
                    <button className="btn btn-primary btn-block">
                        Register
                    </button>
                    <Link to="/login" className="btn btn-danger btn-block">
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    addUser: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    error: state.error.error,
    users: state.user.users
});

export default connect(
    mapStateToProps,
    { addUser }
)(Register);
