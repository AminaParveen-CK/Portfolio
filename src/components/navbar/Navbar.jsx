import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import { Link } from 'react-router-dom';
import cv from '../../images/AminaParveen-CV.pdf'

const Navbarportfolio = () => {
  return (
    <div >
         <Navbar expand="lg" className="navbar bg-dark"  variant="dark">
      <Container>
        <Navbar.Brand href="#home"><div  className='mylogo'><img src="https://logos.textgiraffe.com/logos/logo-name/Amina-designstyle-smoothie-m.png" alt="" /></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav "  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="linkslist ms-auto">
           <Link to={'/'}  className='nav-links' > <Nav.Link className="links " href="#home">Home</Nav.Link> </Link>
           <Link to={'/about'} className='nav-links' > <Nav.Link className="links text-light" href="#link">About Me</Nav.Link> </Link>
           <Link to={'/skills'} className='nav-links' > <Nav.Link className="links text-light" href="#home">Skills</Nav.Link> </Link>
           <Link to={'/projects'} className='nav-links' > <Nav.Link className="links text-light" href="#home">Projects</Nav.Link> </Link>
           <Link to={'/contact'} className='nav-links' > <Nav.Link className="links text-light" href="#home">Contact</Nav.Link> </Link>
          </Nav>
         <a href={cv} className='connect btn' download >Download CV</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarportfolio