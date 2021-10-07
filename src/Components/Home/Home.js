import React, { useState, Component } from 'react';
import Typewriter from 'typewriter-effect'
import Typist from "react-typist";

import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import "./Home.css";
import pic from '../Home/images/circle-cropped.png'
import linkedin from '../Home/images/linkedin.png'
import github from '../Home/images/github.png'
import resume from '../Home/images/cv.png'
import resumeFile from '../Home/images/Resume2021.pdf'





function Home() {

  let myInfo = [
    "Hello, welcome to my page!",
    "Hope you enjoy it!",
  ];

  let renderInfo = () => {
    return myInfo.map((info) => {
      return (
        <span>

          <Typist.Delay ms={1000} />
          <span>{info}</span>
          <Typist.Backspace count={info.length} delay={info.length * 100} />


        </span>
      );
    });

  };


  return (

    <div className="mainDiv">
      
      <div className="pictureDiv">

        <img className="mainpic" src={pic}></img>
        <h1 className='home-name'>Javier J. Marin</h1>
            
      </div>

      <div className="typistDiv">
        <Typist>
          {renderInfo()}
        </Typist>
      </div>
      <a href='https://www.linkedin.com/in/javier-j-marin/'><img className='icon' src={linkedin}></img></a>
      <a href='https://github.com/jaym832'><img className='icon' src={github}></img></a>
      <a href={resumeFile}><img className='icon' src={resume}></img></a>



    </div>


  );
}

export default Home;