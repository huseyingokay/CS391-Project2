import React from "react";
import { Form } from "react-bootstrap";

class FormEnter extends React.Component {

  render() {
    return (
      <>
        <Form.Group controlId={this.props.controlId}>
          <Form.Label>{this.props.formLabel}</Form.Label>
          <Form.Control
            type={this.props.formType}
            placeholder={this.props.placeHolder}
            onChange={(e) => this.props.handleSubmit(e)}
          />
        </Form.Group>
      </>
    );
  }
}

export default FormEnter;
