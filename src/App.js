import logo from './logo.svg';
import './App.css';
import React, { useState, Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import home from './Components/Home/Home'
import portfolio from './Components/Portfolio/Portfolio'
import spacecowboy from './Components/Portfolio/SpaceCowboy'
import fureverhomes from './Components/Portfolio/FurEverHomes'
import nutrition from './Components/Portfolio/Nutrition'
import TheNavbar from './Components/Navbar'




function App() {


  return (

    <BrowserRouter>
      <TheNavbar />






      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/portfolio" component={portfolio} exact />
        <Route path="/spacecowboy" component={spacecowboy} exact />
        <Route path="/nutrition" component={nutrition} exact />
        <Route path="/fureverhomes" component={fureverhomes} exact />









      </Switch>


    </BrowserRouter>




  );
}

export default App;
