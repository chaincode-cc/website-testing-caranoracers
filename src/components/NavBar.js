import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark"  sticky="top">
        <Container>
          <Navbar.Brand href="#home">Cardano Racers</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#howtoplay">HOW TO PLAY</Nav.Link>
            <Nav.Link href="#nft">NFTs</Nav.Link>
            <Nav.Link href="#about">ABOUT US</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default ColorSchemesExample;