import React from "react";
import {Form} from "react-bootstrap";

const formEnter = (form_label,ctrl_ID,form_type,plcHolder,handleFunction) => {

    return (<>
        <Form.Group controlId = {ctrl_ID}>
            <Form.Label>{form_label}</Form.Label>
            <Form.Control
                type = {form_type}
                placeholder={plcHolder}
                onChange={(e) => handleFunction(e)}
            />
        </Form.Group>

    </>


    );
}

export default formEnter;