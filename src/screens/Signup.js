import React from "react";
import isUserExist from "../helpers/isUserExist"
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import validation from "../helpers/validation";
import formEnter from "../helpers/formEnter";
import signUp from "../helpers/signUp";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailValidation: "",
            password: "",
            passwordValidation: "",
            userName: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    signUp(e) {

        console.log(this.state);

        let isValidate = validation(this.state.userName,
            this.state.email,
            this.state.emailValidation,
            this.state.password,
            this.state.passwordValidation
        );
        if (!isValidate) {
            e.preventDefault();
        }
        else {
            if (localStorage) {
                var user = {
                    userName: this.state.userName,
                    email: this.state.email,
                    password: this.state.password
                }
                window.localStorage.setItem(this.state.userName, JSON.stringify(user));
                alert("Successfully registered the user");
            }
            else {
                e.preventDefault();
                alert("This browser doesn't support local storage!");
            }
        }

    }

    forms() {
        let userNameForm = formEnter("User Name", this.state.userName, "text", "Enter user name", this.handleSubmit);
        let EmailForm = formEnter("User Email", this.state.email, "email", "Enter email", this.handleSubmit);
        let EmailValidationForm = formEnter("Email Validation", this.state.emailValidation, "email", "Re-enter email to validate", this.handleSubmit);
        let passwordForm = formEnter("User Password", this.state.password, "password", "Enter Password", this.handleSubmit);
        let passwordValidationForm = formEnter("Password Validation", this.state.passwordValidation, "password", "Re-enter password to validate", this.handleSubmit);
        return (
            <Form action="/" method="" onSubmit={(e) => signUp(e, this.state)}>
                {userNameForm}
                {EmailForm}
                {EmailValidationForm}
                {passwordForm}
                {passwordValidationForm}

                <Button variant="warning" type="submit">
                    Signup
                </Button>

                <Button variant="warning" type="submit">
                    Go to Login
                </Button>

            </Form>

        );
    };

    render() {
        return (
            <Container fluid style={{ marginTop: "5%" }}>
                <Row className="justify-content-center">
                    <Col xs="auto" md="3">
                        {this.forms()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Signup;