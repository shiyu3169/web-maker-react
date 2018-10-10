import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Website = ({ website }) => {
    const { developerId, _id } = website;
    return (
        <li className="list-group-item">
            <Link to={`/user/${developerId}/website/${_id}/page`}>
                {website.name}
            </Link>
            <Link
                className="float-right"
                to={`/user/${developerId}/website/${_id}`}
            >
                <i className="fas fa-cog" />
            </Link>
        </li>
    );
};

Website.propTypes = {
    website: PropTypes.object.isRequired
};

export default Website;
