import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CenterBoxWrapper from "./styles/centerBox"
import Button from "./buttons/button"

const Coach = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [coach, setCoach] = useState([]);

    useEffect(() => {
        const url = `/api/v1/coaches/show/${params.id}`;
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setCoach(res))
            .catch(() => navigate("/coaches"));
    }, [params.id]);

    const person = coach?.coach
    const appointments = coach?.appointments
    
    const appointmentsList = () => {
        let appointmentsList = "No appointments scheduled";
        
        if (appointments?.length > 0) {
            
            appointmentsList = appointments
            .map((appointment, index) => {
                const appointStart = appointment.appointment_start
                const appointEnd = appointment.appointment_end
                return(
                    <div key={index} className="list-group-item">
                        Start Time: {appointStart}
                        <br></br>
                        End Time: {appointEnd}
                        <br></br>
                        {appointmentStatus(appointment)}
                    </div>
                )});
        }

        return appointmentsList;
    };

    const appointmentStatus = (appointment) => {
        if (appointment.status === "Open") {
            return(
                <div>
                    Appointment Open for Booking
                </div>
            )
        } else {
            return(
                <div>
                    Student Name: {appointment?.student_name}
                    <br></br>
                    Student Email: {appointment?.student_email}
                </div>
            )
        }
    }

    return (
        <CenterBoxWrapper>
            <div>
                Welcome, {person?.name} ({person?.email})
                <br></br>
                Here are a list of appointments you have coming up!
                <div className="list-group">
                    <h2>Appointments</h2>
                    {appointmentsList()}
                </div>
            </div>
            <Button 
                route={`/appointments/create`}
                text={"Create an Appointment"} 
                props={person}
            />
            <br></br>
            <br></br>
            <Button route="/" text="Return to Homepage" />
        </CenterBoxWrapper>
    )
};

export default Coach;