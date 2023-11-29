import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BookAppointment = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [student, setStudent] = useState("");

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const url = `/api/v1/appointments/edit/${params.id}`;

        if (!student) {
            return;
        }

        const body = {
            student,
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "PATCH",
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
                        Book appointment
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <h3>Enter your email to book this appointment!</h3>
                            <br></br>
                            <label htmlFor="Student">Your Student Email</label>
                            <input
                                type="text"
                                name="student"
                                id="Student"
                                placeholder="your@email.com"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setStudent)}
                            />
                        </div>
                        <button type="submit" className="btn custom-button mt-3">
                            Book Appointment
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

export default BookAppointment;