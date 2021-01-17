import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import './style.css';

class Photo extends React.Component {
  render() {
    return (
     <div class="memes">
      <Card className="mb-3">
        <div class="img">
         <Card.Img src={this.props.link} />
        </div>
        <div class="writing">
         <Card.Body>
          <Card.Text>{this.props.description}</Card.Text>
         </Card.Body>
        </div>
      </Card>
    </div>
    );
  }
}


export default Photo;