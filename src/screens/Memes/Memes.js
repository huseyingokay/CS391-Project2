import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container} from "react-bootstrap";
import Photo from './Photo';

import image1 from '../../assets/meme_1.jpg';
import image2 from '../../assets/meme_2.jpg';
import image3 from '../../assets/meme_3.jpg';
import image4 from '../../assets/meme_4.jpg';
import image5 from '../../assets/meme_5.jpg';
import image6 from '../../assets/meme_6.jpg';
import image7 from '../../assets/meme_7.jpg';
import image8 from '../../assets/meme_8.jpg';
import image9 from '../../assets/meme_9.jpg';
import image10 from '../../assets/meme_10.jpg';
import image11 from '../../assets/meme_11.jpg';
import image12 from '../../assets/meme_12.jpg';
import image13 from '../../assets/meme_13.jpg';
import image14 from '../../assets/meme_14.jpg';
import image15 from '../../assets/meme_15.jpg';
import image16 from '../../assets/meme_16.jpg';
import image17 from '../../assets/meme_17.jpg';
import image18 from '../../assets/meme_18.jpg';

class Memes extends React.Component {
  render() {
    return (
      <>
        <Container>

          <Row>
            <Col md>  
              <Photo link={image1} description="Çok güzel oldu abi teşekkürler :("/>
            </Col>
          
            <Col md>
              <Photo link={image2} description="Some dad issues"/>
            </Col>
          </Row>

            
          <Row>
            <Col md>
              <Photo link={image3} description="Ppppppppoteeer"/>
            </Col>

            <Col md>
              <Photo link={image4} description="Reading books makes you more intellectual."/>
            </Col>
          </Row>


          <Row>
            <Col md>
              <Photo link={image5} description="FBI is ashamed of you"/>
            </Col>

            <Col md>
              <Photo link={image6} description="Learn SQL now!"/>
            </Col>
          </Row>


          <Row>
            <Col md>
            <Photo link={image7} description="Finals are coming"/>
            </Col>

            <Col md>
              <Photo link={image8} description="Let's bring democracy."/>
            </Col>
          </Row>


          <Row>
            <Col md>
              <Photo link={image9} description="Don't touch meeee"/>
            </Col>

            <Col md>
              <Photo link={image10} description="Houston, we have a problem"/>
            </Col>
          </Row>


          <Row>
            <Col md>
              <Photo link={image11} description="Welcome to the dark side of the the Chocolate Factory."/>
            </Col>

            <Col md>
              <Photo link={image12} description="NO GOD! PLEASE NO!!!"/>
            </Col>
          </Row>


          <Row>
            <Col md>
              <Photo link={image13} description="In the end we're all humman behind these black mirrors."/>
            </Col>

            <Col md>
              <Photo link={image14} description="A new definition for the term Keyboard-Warrior!"/>
            </Col>
          </Row>


          <Row>
            <Col md>
              <Photo link={image15} description="Some Cs students at the end of the 4th year:"/>
            </Col>

            <Col md>
              <Photo link={image16} description="That's what i do"/>
            </Col>
          </Row>


          <Row>
            <Col md>
              <Photo link={image17} description="No, it's not."/>
            </Col>

            <Col md>
              <Photo link={image18} description="Good old days"/>
            </Col>
          </Row>

        </Container>
      </>
    );
  }
}

export default Memes;