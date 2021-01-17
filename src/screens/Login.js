import React from "react";
import isUserExist from "../helpers/isUserExist"
import { Button, Form, Col, Row, Container } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showWarning: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  logIn(e){
    let isExist = isUserExist(this.state.email, this.state.password);
    if(!isExist){
      e.preventDefault();
      this.setState({
        showWarning: true
      })
    }
  }

  render() {
    return (
      <Container fluid style={{ marginTop: "5%"}}>
        <Row className="justify-content-center">
          <Col xs="auto" md="auto">
            <Form action="/memes" method="" onSubmit={(e) => this.logIn(e)}>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
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

              <Button variant="warning" type="submit">
                Log in
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center" style={{ marginTop: "2%" }}>
          <Col xs="auto" md="auto">
            <p> Don't you have an account? </p>
            <Button variant="warning" href="/signup">
              Sign Up
            </Button>
          </Col>
        </Row>
        {this.state.showWarning && 
        <Row className="justify-content-center" style={{ marginTop: "2%" }}>
          <Col xs="auto" md="3">
            <p> Your password is wrong or user doesn't exist </p>
          </Col>
        </Row>
        } 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br />
        <br />
      </Container>
     
    );
  }
}

export default Login;
