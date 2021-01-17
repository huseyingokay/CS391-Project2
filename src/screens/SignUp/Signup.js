import React from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import signUp from "../../helpers/signUp";
import FormEnter from "./FormEnter";

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

    render() {
        return (
            <Container fluid style={{ marginTop: "5%" }}>
                <Row className="justify-content-center">
                    <Col xs="auto" md="auto">
                        <Form action="/" method="" onSubmit={(e) => signUp(e, this.state)}>
                            <FormEnter controlId={"userName"} formLabel="User Name" formType="text" placeHolder="Enter user name" handleSubmit={this.handleSubmit} />
                            <FormEnter controlId={"email"} formLabel="User Email" formType="email" placeHolder="Enter email" handleSubmit={this.handleSubmit} />
                            <FormEnter controlId={"emailValidation"} formLabel="Email Validation" formType="email" placeHolder="Re-enter email" handleSubmit={this.handleSubmit} />
                            <FormEnter controlId={"password"} formLabel="User Password" formType="password" placeHolder="Enter Password" handleSubmit={this.handleSubmit} />
                            <FormEnter controlId={"passwordValidation"} formLabel="Password Validation" formType="password" placeHolder="Re-enter password" handleSubmit={this.handleSubmit} />

                            <Button variant="warning" type="submit" style={{ marginRight: "2%" }}>
                                Signup
                             </Button>

                            <Button variant="warning" type="submit">
                                Go to Login
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Signup;