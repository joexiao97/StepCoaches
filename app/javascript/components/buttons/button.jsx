import React from "react";
import { Link } from "react-router-dom";

export default ({route, text, props}) => (
    <Link
        to={route}
        className="btn btn-lg custom-button"
        role="button"
    >
        {text}
    </Link>
)