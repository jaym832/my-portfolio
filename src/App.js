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



function App() {


  return (

    <BrowserRouter>


      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container className='nav-bar-container'>

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
