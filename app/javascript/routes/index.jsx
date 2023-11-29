import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Students from "../components/students"
import Student from "../components/student"
import Coaches from "../components/coaches"
import Coach from "../components/coach"
import Appointments from "../components/appointments"
import Appointment from "../components/appointment"
import NewAppointment from "../components/newAppointments"
import BookAppointment from "../components/bookAppointment"

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/student/:id" element={<Student />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/coach/:id" element={<Coach />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/appointment/:id" element={<Appointment />} />
            <Route path="/appointments/create" element={<NewAppointment />} />
            <Route path="/appointments/update/:id" element={<BookAppointment />} />
        </Routes>
    </Router>
);