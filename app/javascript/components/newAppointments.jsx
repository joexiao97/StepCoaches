import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewAppointment = () => {
    const navigate = useNavigate();
    const [coach, setCoach] = useState("");
    const [date, setDate] = useState("");

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const url = "/api/v1/appointments/create";

        if (!date || !coach){
            return;
        }

        const body = {
            date,
            coach,
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((response) => navigate(`/appointment/${response.id}`))
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                    <h1 className="font-weight-normal mb-5">
                        Create a new appointment
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="Coach">Coach Email</label>
                            <input
                                type="text"
                                name="coach"
                                id="Coach"
                                placeholder="your@email.com"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setCoach)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date and Time</label>
                            <input
                                type="datetime-local"
                                name="date"
                                id="date"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setDate)}
                            />
                        </div>
                        <button type="submit" className="btn custom-button mt-3">
                            Create Appointment
                        </button>
                        <Link to="/appointments" className="btn btn-link mt-3">
                            Back to appointments
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewAppointment;