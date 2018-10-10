import React, { Component } from "react";
import { Link } from "react-router-dom";
import Website from "../layout/Website";
import axios from "axios";

export default class WebsiteList extends Component {
    state = {
        websites: []
    };
    componentDidMount() {
        this.getWebsitesbyUser();
    }

    getWebsitesbyUser = async () => {
        const { uid } = this.props.match.params;
        const res = await axios.get(`/api/user/${uid}/website`);
        this.setState({
            websites: res.data
        });
    };

    render() {
        const { uid } = this.props.match.params;
        const { websites } = this.state;
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    <Link className="color-white" to={`/user/${uid}`}>
                        <i className="fas fa-chevron-left" />
                    </Link>
                    <span className="navbar-brand">
                        <b>Websites</b>
                    </span>
                    <Link
                        className="color-white"
                        to={`/user/${uid}/website/new`}
                    >
                        <i className="fas fa-plus" />
                    </Link>
                </nav>
                <div className="container-fluid">
                    <ul className="list-group">
                        {websites.map(website => (
                            <Website key={website._id} website={website} />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
