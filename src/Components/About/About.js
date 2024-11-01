import React, { useState, Component } from "react";
import "./About.css";

function About() {
  return (
    <div className="aboutDiv">
      <div className="about-text">
        <h1>About me. </h1>

        <p>
          {" "}
          My name is Javier Marin and I am a full stack developer with over 2
          years of experience in the field. I have graduated from both the
          University of Houston as a Computer Information Systems student and as
          a graduate from the Full Stack Web Development bootcamp Flatiron.
          <br></br>
          <br></br>
          Programming is a bittersweet art form for me. One minute I could be
          loving it and then the next I could be wanting to tear my hair out
          trying to debug an error, but thats what I really enjoy about it, the
          challenge and the gratification I get from it. Programming is a
          job/hobby that is always constantly changing.Its something where you
          have to be ok with always learning and adapating.
          <br></br>
          <br></br>
          When im not typing away at my keyboard you can find me hanging out
          with my family,watching a movie, working out, or reading a book. I am
          always looking for projects that can help me grow and learn new
          technologies. Feel free to send me a message if you are interested in
          collaborating with me or just want to talk.
        </p>
      </div>
    </div>
  );
}

export default About;
