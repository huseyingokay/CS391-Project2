import React from 'react';
import { Button, Form } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    console.log("HERE")
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  route(e){
    console.log(this.state.email)
    console.log(this.state.password)
    e.preventDefault();
  }

  render() {
    return (
      <>
        <Form action="/memes" method="" onSubmit={(e) => this.route(e)}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.handleSubmit(e)}/>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" onChange={(e) => this.handleSubmit(e)}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default Login;