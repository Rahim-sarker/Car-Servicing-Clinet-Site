import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Car Servicing</Navbar.Brand>
          <Nav className="mx-auto">
             <p className='text-white' >Created by Rahim Sarker. © 2022</p>
          </Nav>
         </Container>
      </Navbar>
        </footer>
    );
};

export default Footer;