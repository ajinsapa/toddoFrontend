import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center' }}>
  <img className='m1' src="https://i.postimg.cc/2jLQcmmJ/logo.png" alt="" />
  <h3 style={{ marginLeft: '5px', marginBottom: '0' }}>toDo</h3>
</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"  style={{color:"black"}} ><h4>Home</h4></Nav.Link>
            <Nav.Link href="/Auth" style={{color:"black"}} ><h4>Login</h4></Nav.Link>
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  )
}

export default Header
