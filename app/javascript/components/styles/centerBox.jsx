import React from "react";

export default ({children}) => (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
            {children}
        </div>
    </div>
)