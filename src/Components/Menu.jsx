import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <Navbar bg='success' variant='success' fixed='top' expand='lg'>
        <Container>
          <Navbar.Brand>Logo</Navbar.Brand>
          <Nav className='justify-content-end gap-3 flex-grow-1 pe-3 me-auto'>
              <NavLink className="nav-link" to='/'>Home</NavLink>
              <NavLink className="nav-link" to='/Favorites'>Favorites</NavLink>
          </Nav>
        </Container>
      </Navbar>     
    </>
  );
}

export default Menu