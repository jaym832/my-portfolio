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
import war1 from './screenshots/war1.png'
import war2 from './screenshots/war2-copy.gif'
import war3 from './screenshots/war3-copy.gif'
import war4 from './screenshots/war4.png'

export class War extends Component {
    render() {
        return (
            <div className="projects-display">

                <MDBCarousel showIndicators dark fade >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId={0}>
                            <MDBCarouselElement src={war1} alt='...' />

                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={1}>
                            <MDBCarouselElement src={war2} alt='...' />

                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={2}>
                            <MDBCarouselElement src={war3} alt='...' />

                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={3}>
                            <MDBCarouselElement src={war4} alt='...' />

                        </MDBCarouselItem>






                    </MDBCarouselInner>
                    <br></br>
                    <br></br>
                </MDBCarousel>
                <div className='project-text'>

                    <MDBCardText >
                        Project: This is a variation of the war card game. I created this game with Selam and Marc who were in my cohort at the Flatiron bootcamp. We did this as our Hackathon project for mintbean. This game is a sort of mini version of the war card game where the first person to accumulate 27 or more cards wins the round and the first player to win 3 rounds wins the game.
                        My contribution to this project was mainly working on the logic of the game, some styling and deploying the app to Netlify.
                        <br></br>
                        <br></br>
                        Technologies: React,Hooks,AXIOS,material ui,RESTful API,Netlify
                        <br></br>
                    </MDBCardText>
                </div>
                <br></br>
                <div className='project-buttons'>
                    {/* <MDBBtn href='https://www.youtube.com/watch?v=Uo6JXHZbMsc' className='project-button'>
                        DEMO
                    </MDBBtn> */}

                    <MDBBtn href='https://github.com/mnopprapun/cardgame' className='project-button' >
                        Code
                    </MDBBtn>
                    <MDBBtn href='https://upbeat-colden-3d0b2b.netlify.app/' className='project-button' >
                        Website
                    </MDBBtn>

                </div>

            </div>
        )
    }
}

export default War


