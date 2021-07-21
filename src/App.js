import logo from './logo.svg';
import './App.css';
import React, { useState, Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import home from './Components/Home/Home'
import about from './Components/About/About'
import portfolio from './Components/Portfolio/Portfolio'
import contact from './Components/Contact/Contact'
import spacecowboy from './Components/Portfolio/SpaceCowboy'
import fureverhomes from './Components/Portfolio/FurEverHomes'
import nutrition from './Components/Portfolio/Nutrition'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBNavbarBrand,
//   MDBCollapse,
//   MDBBtn
// } from 'mdb-react-ui-kit';


function App() {
  // const [showNavColorSecond, setShowNavColorSecond] = useState(false);


  return (

    <BrowserRouter>





      {/* <MDBNavbar expand='lg' dark bgColor='dark' className='nav-bar'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>Welcome</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/about'>About</MDBNavbarLink>            </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/portfolio'>Portfolio</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar> */}




      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className='nav-bar-container'>
          <Navbar.Brand href="/">Welcome</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>













      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/about" component={about} exact />
        <Route path="/portfolio" component={portfolio} exact />
        <Route path="/contact" component={contact} exact />
        <Route path="/spacecowboy" component={spacecowboy} exact />
        <Route path="/nutrition" component={nutrition} exact />
        <Route path="/fureverhomes" component={fureverhomes} exact />






      </Switch>


    </BrowserRouter>




  );
}

export default App;
