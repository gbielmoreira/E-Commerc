import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="menu">
      <Container>
        <Navbar.Brand href="#home">E-commerc</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Sobre</Nav.Link>

            <NavDropdown title="Produtos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Meu nome</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Teu nome</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nome 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Nome 4</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;