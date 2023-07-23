import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbarc() {
  return (
    <Navbar expand="lg" className='container-nav' >
      <Container>
        <Navbar.Brand className='nav-title' href="#home">Anime Girls</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link className='nav-title' to="/">Home</Link>
            <Link className='nav-title' to="#link">GitHub</Link>
            <NavDropdown title="APIS" id="basic-nav-dropdown">

             
              <Link className='drop' to="waifupics">WaifuPics</Link>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarc;