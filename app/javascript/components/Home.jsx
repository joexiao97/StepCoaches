import React from "react";

import CenterBoxWrapper from "./styles/centerBox"
import Button from "./buttons/button"

export default () => (
    <CenterBoxWrapper>
        <div className="container secondary-color">
            <h1 className="display-4">Stepful Coaching</h1>
            <p className="lead">
                Book an appointment with a coach or become one today!
            </p>
            <hr className="my-4" />
            <Button route="/students" text="Click here if you are a student" />
            <br></br>
            <br></br>
            <Button route="/coaches" text="Click here if you are a coach" />
            <br></br>
            <br></br>
            <Button route="/appointments" text="Click here to book available appointments" />
        </div>
    </CenterBoxWrapper>
);