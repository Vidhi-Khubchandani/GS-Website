import React from "react";
import {Navbar,Container,Nav} from 'react-bootstrap';
import './NavigationBar.css';
import logo from './brand_logo.png';
import {Link} from 'react-router-dom'
function NavigationBar(){
    return (
      <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
     >
       <Container>
         <Navbar.Brand href="#home">
           <div className="nav-brand">
             <Link to='/'>
             <img
             alt="Logo"
             src={logo}
             className="nav-brand-logo"
             /></Link>
             <h1
             className="nav-brand-heading"
             >
             GrihSangini
             </h1>
           </div>
         </Navbar.Brand>
         <Navbar.Toggle/>
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav>
             <Nav.Link href="#aboutus">About Us</Nav.Link>
             <Nav.Link href="#services">Services</Nav.Link>
             <Nav.Link href="#reviews">Reviews</Nav.Link>
             <Nav.Link href="#contactus">Contact Us</Nav.Link>
             <Nav.Link href="#chatbot">ChatBot</Nav.Link>
             <Nav.Link><Link style={{textDecoration:'none',color:'#fff'}} to='/login'>Login</Link></Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
    );
}

export default NavigationBar;