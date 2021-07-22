import React, { useState, Component } from 'react';
import './About.css'

function About() {
    return (

        <div className="aboutDiv">
            <div className='about-text'>

                <h1>About me :</h1>

                <p> My name is Javier Marin and i am a junior full stack developer. I am currently
                    a senior at the University of Houston where i am majoring in Computyer Information
                    Systems. I am also a graduate in the Software engineering program at Flatiron school.
                    <br></br><br></br>
                    Programming is a bittersweet art form for me. One minute i could be loving it and then the next i could be
                    wanting to tear my hair out trying to debug an error, but thats what i enjoy about it, the challenge and the gratification
                    i get from it.
                    <br></br><br></br>
                    When im not typing away at my keyboard you can find me hanging out with family,watching a movie, working out, or reading.
                </p>
            </div>


        </div>



    );
}

export default About;