import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container, Card } from "react-bootstrap";

class Memes extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md>
             <Card className="mb-3">
               <Card.Img src={require('./meme_1.jpg')} />
               <Card.Body>
                 <Card.Text>
                   Çok güzel oldu abi teşekkürler :(
                 </Card.Text>
               </Card.Body>
             </Card>
            </Col>
          
            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
                <Card.Img src="meme_2.jpg/200/100" />
                 <Card.Body>
                  <Card.Text>
                    Some dad issues
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_3.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                     Ppppppootter
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>

            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_4.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                   Reading books makes you more intellectual.
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_5.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                   FBI is ashamed of you
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>

            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_6.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                   Learn SQL now!
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_7.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                     Konular yetişmiyor :(
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>

            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_8.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                   Let's bring democracy.
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_9.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                     Don't touch meee!
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>

            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_10.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                    Houston, we have a problem
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_11.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                   Welcome to the dark side of the the Chocolate Factory.
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>

            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_12.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                   NO GOD! PLEASE NO!!!
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_13.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                   In the end we're all humman behind these black mirrors.
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>

            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_14.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                   A new definition for the term Keyboard-Warrior!
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_15.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                   Some Cs students at the end of the 4th year:
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>

            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_16.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                   That's what i do
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_17.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                   No, it's not.
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>

            <Col md>
              <Card className="mb-3" style={{ color: "#000"}}>
               <Card.Img src="meme_18.jpg/200/100" />
               <Card.Body>
                 <Card.Text>
                   Good old days
                 </Card.Text>
               </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </>
    );
  }
}

export default Memes;