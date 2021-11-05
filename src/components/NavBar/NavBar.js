import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


import img from "../../logo.png";
import "./NavBar.css";

const NavBar = () => {
  const {user, logOut} = useAuth();

  return (
    <Navbar bg="primary" variant={"dark"} expand="lg" className="navbar">
      <Container>
        <Navbar.Brand to="/home">
          <img src={img} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            navbarScroll
          >
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/shipping">Shipping</NavLink>
            <NavLink to="/admin">Admin</NavLink>
            { user.email &&
              <span className="user-name"> Hello, {user.displayName}</span>
            }
        
               { user.email ?
               <button onClick={logOut} className="btn-primary">Logout</button>

               :
               <NavLink to="/register" className="btn-primary">Login</NavLink>
               }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
