import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
       <Navbar expand="lg" bg="dark" variant="dark" className="navv">
        <Container>
          <Navbar.Brand href="#home">
            <img src='/images/logo.png' className='nav-logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link text-white">Home</Link>
              <NavDropdown title="Articles" id="articles-dropdown">
                <NavDropdown.Item as={Link} to="/Articles/Food">Food</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Articles/Home">Home</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Articles/Fashion">Fashion</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Articles/News">News</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/Products/ClothingandFashion">
                  Clothing and Fashion
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Products/BeautyandPersonalCare">
                  Beauty and Personal Care
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Products/HomeandLifestyle">
                  Home and Lifestyle
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Products/FoodandBeverages">
                  Food and Beverages
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Products/TechandGadgets">
                  Tech and Gadgets
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Products/BabyandKids">
                  Baby and Kids
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/ChatRoom" className="nav-link">Chat Forum</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
