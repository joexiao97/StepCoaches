import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./buttons/button"
import CenterBoxWrapper from "./styles/centerBox"

const Appointments = () => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = "api/v1/appointments/index";
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setAppointments(res))
            .catch(() => navigate("/"));
    }, []);

    const allAppointments = appointments?.map((appointment) => (

        <div className="container">
            <div>
                Coach: {appointment?.coach_name}
                <br></br>
                Time Start: {appointment?.time_start}
                <br></br>
                Time end: {appointment?.time_end}
                <br></br>
            </div>
            <Button route={`/appointments/update/${appointment.id}`} text={"Book"} />
            <br></br>
            <br></br>
        </div>
    ));

    return (
        <div className="user-list">
            <CenterBoxWrapper>
                <h1>
                    Here is a list of all available appointments to book!
                </h1>
                <div>
                    {allAppointments}
                </div>
            <Button route="/" text="Return to Homepage" />
            </CenterBoxWrapper>
        </div>
    )
};

export default Appointments;