import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CenterBoxWrapper from "./styles/centerBox"
import Button from "./buttons/button"

const Student = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState([]);

    useEffect(() => {
        const url = `/api/v1/students/show/${params.id}`;
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setStudent(res))
            .catch(() => navigate("/students"));
    }, [params.id]);

    const person = student?.student
    const appointments = student?.appointments

    const appointmentsList = () => {
        let appointmentsList = "No appointments scheduled";

        if (appointments?.length > 0) {
            appointmentsList = appointments
                .map((appointment, index) => (
                    <li key={index} className="list-group-item">
                        Start Time: {appointment.appointment_start}
                        <br></br>
                        End Time: {appointment.appointment_end}
                        <br></br>
                        Coach Name: {appointment.coach_name}
                        <br></br>
                        Coach Email: {appointment.coach_email}
                    </li>
                ));
        }

        return appointmentsList;
    };

    return (
        <>
            <CenterBoxWrapper>
                <div>
                    Welcome, {person?.name} ({person?.email})
                    <br></br>
                    Here are a list of appointments!
                    <ul className="list-group">
                        <h2 className="mb-2">Appointments</h2>
                        {appointmentsList()}
                    </ul>
                </div>
                <Button route="/appointments" text="Book an appointment"/>
                <br></br>
                <br></br>
                <Button route="/" text="Return to Homepage" />
            </CenterBoxWrapper>

        </>
    )
};

export default Student;