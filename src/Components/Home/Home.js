import React, { useState, Component, useEffect } from 'react';
import Typewriter from 'typewriter-effect'
import Typist from "react-typist";
import Intro from '../Home/intro'
import AboutMe from '../Home/AboutMe'
import MyWork from '../Home/MyWork'
import Contact from '../Home/Contact'




function Home() {

  useEffect(() => {
    console.log('im working')
  })






  return (

    <div >


      <Intro />

      <AboutMe />

      <MyWork />
      <Contact />













    </div>


  );
}

export default Home;