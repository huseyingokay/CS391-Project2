import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';



class Header extends React.Component {

  render() {
    return (

      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Meme Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://www.youtube.com/watch?v=BNqgTvC6krU" target="_blank">Eyvah! Mahmut Hoca</Nav.Link>
              <Nav.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Rick Roll</Nav.Link>
              <Nav.Link href="https://www.youtube.com/watch?v=Z9XfN5wLKMU" target="_blank">Defend KEBAB</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">Go back to Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>

    )
  }
}
export default Header;