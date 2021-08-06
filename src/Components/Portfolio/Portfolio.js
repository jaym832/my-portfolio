import React, { useState, Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import fureverimage from '../fureverhomes.png';
import spacecowboy from '../spacecowboy.png'
import nutrition from '../nutrition-app.png'
import war from '../war.png'
import './Portfolio.css'


function Portfolio() {
    return (

        <div className='project-collection-div'>

            <br></br>
            <MDBCard className='project-card'>
                <MDBCardImage src={fureverimage} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>FurEverHomes</MDBCardTitle>
                    <MDBCardText>
                        Flatiron capstone project. This web application allows its users to
                        find pets to adopt and or re-home.
                    </MDBCardText>
                    <MDBBtn href='/fureverhomes'>view</MDBBtn>
                </MDBCardBody>
            </MDBCard>

            <MDBCard className='project-card'>
                <MDBCardImage src={spacecowboy} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Space Cowboy</MDBCardTitle>
                    <MDBCardText>
                        Made this for my phase 4 project in Flatiron. My partner and I created a simple retro style game
                        called Space Cowboy.
                    </MDBCardText>
                    <MDBBtn href='/spacecowboy'>view</MDBBtn>
                </MDBCardBody>
            </MDBCard>


            <MDBCard className='project-card'>
                <MDBCardImage src={nutrition} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Nutrition Calculator</MDBCardTitle>
                    <MDBCardText>
                        For my phase 3 project at Flatiron, I created a calorie counting web application.
                    </MDBCardText>
                    <MDBBtn href='/nutrition'>view</MDBBtn>
                </MDBCardBody>
            </MDBCard>


            <MDBCard className='project-card'>
                <MDBCardImage src={war} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>War Card Game</MDBCardTitle>
                    <MDBCardText>
                        Hackathon project game War. Created with some friends from my Flatiron cohort.
                    </MDBCardText>
                    <MDBBtn href='/war'>view</MDBBtn>
                </MDBCardBody>
            </MDBCard>


        </div>



    );
}

export default Portfolio;