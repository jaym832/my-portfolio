import React, { Component } from 'react'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
    MDBBtn,
    MDBCardText
} from 'mdb-react-ui-kit';
import spacecowboygif from './screenshots/spacecowboy.gif'
import spacecowboygif2 from './screenshots/spacecowboy2.gif'

import spacecowboy1 from './screenshots/spacecowboy1.png'
import spacecowboy2 from './screenshots/spacecowboy2.png'
import spacecowboy4 from './screenshots/spacecowboy4.png'



export class SpaceCowboy extends Component {
    render() {
        return (
            <div className="projects-display">

                <MDBCarousel showIndicators dark fade >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId={0}>
                            <MDBCarouselElement src={spacecowboy1} alt='...' />


                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={1}>
                            <MDBCarouselElement src={spacecowboygif} alt='...' />

                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={2}>
                            <MDBCarouselElement src={spacecowboy2} alt='...' />

                        </MDBCarouselItem>


                        <MDBCarouselItem itemId={3}>
                            <MDBCarouselElement src={spacecowboy4} alt='...' />

                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={4}>
                            <MDBCarouselElement src={spacecowboygif2} alt='...' />

                        </MDBCarouselItem>





                    </MDBCarouselInner>
                    <br></br>
                    <br></br>
                </MDBCarousel>
                <div className='project-text'>

                    <MDBCardText >
                        Project: Space Cowboy, is a web application game created by myself and my partner in Phase 4 of flatiron.
                        In this game users have to create a player to play and gain points for eliminating the aliens. At the end points are saved.
                        <br></br>
                        <br></br>
                        Frontend: React,Hooks,fetch,bootstrap,axios, kaboom.js
                        <br></br>
                        Backend: Rails,Serializers,postgresql
                    </MDBCardText>
                </div>
                <br></br>
                <div className='project-buttons'>
                    <MDBBtn href='https://www.youtube.com/watch?v=Uo6JXHZbMsc' className='project-button'>
                        DEMO
                    </MDBBtn>

                    <MDBBtn href='https://github.com/jaym832/space-cowboy' className='project-button' >
                        Code
                    </MDBBtn>


                </div>

            </div>
        )
    }
}

export default SpaceCowboy
