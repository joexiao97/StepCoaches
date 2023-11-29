import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CenterBoxWrapper from "./styles/centerBox"
import Button from "./buttons/button"

const Appointment = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        const url = `/api/v1/appointments/show/${params.id}`;
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setAppointment(res))
            .catch(() => navigate("/appointments"));
    }, [params.id]);

    const isAvailableToBook = () => {
        if(appointment.student_name){
            return(
                <div>Appointment Has been Booked</div>
            )
        } else {
            return(
                <Button route={`/appointments/update/${appointment.id}`} text={"book"} />
            )
        }
    }

    return (
        <CenterBoxWrapper>
            <div>
                <br></br>
                
                <h2>Here are the appointment details</h2>
                <div className="container">
                    <div>
                        Coach: {appointment?.coach_name}
                        <br></br>
                        Student: {appointment?.student_name}
                        <br></br>
                        Time Start: {appointment?.time_start}
                        <br></br>
                        Time end: {appointment?.time_end}
                        <br></br>
                    </div>
                    {isAvailableToBook()}
                </div>
            </div>
            <br></br>
            <Button route="/" text="Return to Homepage" />
        </CenterBoxWrapper>
    )
};

export default Appointment;