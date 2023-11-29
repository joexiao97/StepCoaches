import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./buttons/button"
import CenterBoxWrapper from "./styles/centerBox"

const Students = () => {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const url = "api/v1/students/index";
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setStudents(res))
            .catch(() => navigate("/"));
    }, []);

    const allStudents = students.map((student) => (
        
        <div className="container">
            <Button route={`/student/${student.id}`} text={student.email} />
            <br></br>
            <br></br>
        </div>
    ));

    return (
        <div className="user-list"> 
            <CenterBoxWrapper>
                <h1>
                    Here is a list of all students
                </h1>
                <div>
                    {allStudents}
                </div>
            </CenterBoxWrapper>
        </div>
    )
};

export default Students;