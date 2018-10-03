import React from "react";
import PropTypes from "prop-types";

const InputGroup = ({ name, label, type, placeholder, rows }) => {
    return (
        <div>
            {rows > 1 ? (
                <div className="form-group">
                    <label htmlFor={name}>
                        <b>{label}</b>
                    </label>
                    <textarea
                        type={type}
                        name={name}
                        id={name}
                        placeholder={placeholder}
                        className="form-control"
                        rows={rows}
                    />
                </div>
            ) : (
                <div className="form-group">
                    <label htmlFor={name}>
                        <b>{label}</b>
                    </label>
                    <input
                        type={type}
                        name={name}
                        id={name}
                        placeholder={placeholder}
                        className="form-control"
                    />
                </div>
            )}
        </div>
    );
};

InputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    rows: PropTypes.string
};

InputGroup.defaultProps = {
    rows: "1"
};

export default InputGroup;
