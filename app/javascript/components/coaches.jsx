import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./buttons/button"
import CenterBoxWrapper from "./styles/centerBox"

const Coaches = () => {
    const navigate = useNavigate();
    const [coaches, setCoaches] = useState([]);

    useEffect(() => {
        const url = "api/v1/coaches/index";
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setCoaches(res))
            .catch(() => navigate("/"));
    }, []);

    const allCoaches = coaches.map((coach) => (

        <div className="container">
            <Button route={`/coach/${coach.id}`} text={coach.email} />
            <br></br>
            <br></br>
        </div>
    ));

    return (
        <div className="user-list">
            <CenterBoxWrapper>
                <h1>
                    Here is a list of all coaches
                </h1>
                <div>
                    {allCoaches}
                </div>
            </CenterBoxWrapper>
        </div>
    )
};

export default Coaches;