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
import nutrition1 from './screenshots/nutrition1.png'
import nutrition2 from './screenshots/nutrition2.gif'
import nutrition3 from './screenshots/nutrition3.gif'


export class Nutrition extends Component {
    render() {
        return (
            <div className="projects-display">

                <MDBCarousel showIndicators dark fade >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId={0}>
                            <MDBCarouselElement src={nutrition1} alt='...' />


                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={1}>
                            <MDBCarouselElement src={nutrition2} alt='...' />

                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={2}>
                            <MDBCarouselElement src={nutrition3} alt='...' />

                        </MDBCarouselItem>







                    </MDBCarouselInner>
                    <br></br>
                    <br></br>
                </MDBCarousel>
                <div className='project-text'>

                    <MDBCardText >
                        Project: nutrition calculator, was my phase 3 Flatiron project. This web application allows its users
                        to log in thier nutritional information for the day so that they can keep track of thier calories.
                        <br></br>
                        <br></br>
                        Frontend: React,axios,bootstrap
                        <br></br>
                        Backend: Ruby, SQLite, ActiveRecords
                    </MDBCardText>
                </div>
                <br></br>
                <div className='project-buttons'>
                    <MDBBtn href='https://www.youtube.com/watch?v=RAQwWx4mXTk' className='project-button'>
                        DEMO
                    </MDBBtn>

                    <MDBBtn href='https://github.com/jaym832/phase3-frontend' className='project-button' >
                        Front-End
                    </MDBBtn>
                    <MDBBtn href='https://github.com/jaym832/phase3-backend' className='project-button' >
                        Back-End
                    </MDBBtn>

                </div>

            </div>
        )
    }
}

export default Nutrition
