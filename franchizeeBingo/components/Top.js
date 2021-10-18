import { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


function Top(){
  let currentuser;
  if(typeof(window)!=="undefined"){
    console.log("inside ifff");
    currentuser = localStorage.getItem('user');
  }
    const logout = () => {
      localStorage.removeItem("user");
      window.location.reload();
      console.log("deleted");
    }

    
    console.log("Curren tsuer is",currentuser);
    return(
        <Fragment>
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='classes.nav'>
  <Container>
  <Navbar.Brand href="#home">FranchizeeBingo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Rankings</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Acount</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      {currentuser ? (<Nav.Link onClick={logout}>Logout</Nav.Link>):
      (<Fragment><Nav.Link href="/Login">Login</Nav.Link>
      <Nav.Link eventKey={2} href="/SignUp">
        SignUp
      </Nav.Link></Fragment>)}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </Fragment>
    )
}

export default Top;