import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../layout/InputGroup";

class Profile extends Component {
    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <form>
                        <InputGroup
                            name="username"
                            label="Username"
                            type="text"
                            placeholder="Enter your username..."
                        />
                        <InputGroup
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="Enter to edit your email..."
                        />
                        <InputGroup
                            name="firstName"
                            label="First Name"
                            type="text"
                            placeholder="Enter to edit your first name..."
                        />
                        <InputGroup
                            name="lastName"
                            label="Last Name"
                            type="text"
                            placeholder="Enter to edit your last name..."
                        />
                        <Link
                            to="/user/:uid/website"
                            className="btn btn-primary btn-block"
                        >
                            Websites
                        </Link>
                        <Link to="/login" className="btn btn-danger btn-block">
                            Logout
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Profile;
