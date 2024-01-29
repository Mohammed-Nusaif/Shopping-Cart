import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaCartArrowDown } from "react-icons/fa";
import './Navbar.css'

function Navbar1({size,setshow}) {
  return (
    <div>
         <Navbar expand="lg" className="navbar py-3 ">
          <Container>
            <Navbar.Brand href="#home" className="brand" onClick={()=>setshow(true)}>
              OPPO
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" onClick={()=>setshow(true)}>Home</Nav.Link>
              
                  <Nav.Link href="#cart"  onClick={()=>setshow(false)}>
                    <span>
                      <FaCartArrowDown />
                    </span>
                    
                    <span style={{color:"red",fontSize:"15px"}}>{size}</span>
                  </Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Navbar1