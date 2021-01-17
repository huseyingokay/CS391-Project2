import React from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
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

    render() {
        return (
            <Container fluid style={{ marginTop: "5%" }}>
                <Row className="justify-content-center">
                    <Col xs="auto" md="3">
                        <Form action="/" method="" onSubmit={(e) => signUp(e, this.state)}>
                            <Form.Group controlId="userName">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter User Name"
                                    onChange={(e) => this.handleSubmit(e)}
                                />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={(e) => this.handleSubmit(e)}
                                />
                            </Form.Group>

                            <Form.Group controlId="emailValidation">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="validate email"
                                    onChange={(e) => this.handleSubmit(e)}
                                />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    onChange={(e) => this.handleSubmit(e)}
                                />
                            </Form.Group>

                            <Form.Group controlId="passwordValidation">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Validate Password"
                                    onChange={(e) => this.handleSubmit(e)}
                                />
                            </Form.Group>

                            <Button variant="warning" type="submit">
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