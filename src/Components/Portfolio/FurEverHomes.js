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
import fureverhomes1 from './screenshots/fureverhomes.png'
import fureverhomes2 from './screenshots/fureverhomes2.png'
import fureverhomes3 from './screenshots/fureverhomes3.png'
import fureverhomes4 from './screenshots/fureverhomes4.png'
import fureverhomes5 from './screenshots/fureverhomes5.png'
import fureverhomes6 from './screenshots/fureverhomes6.png'
import fureverhomes7 from './screenshots/fureverhomes7.png'


export class FurEverHomes extends Component {
    render() {
        return (
            <div className="projects-display">

                <MDBCarousel showIndicators dark fade >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId={0}>
                            <MDBCarouselElement src={fureverhomes1} alt='...' />


                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={1}>
                            <MDBCarouselElement src={fureverhomes2} alt='...' />

                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={2}>
                            <MDBCarouselElement src={fureverhomes3} alt='...' />

                        </MDBCarouselItem>


                        <MDBCarouselItem itemId={3}>
                            <MDBCarouselElement src={fureverhomes4} alt='...' />

                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={4}>
                            <MDBCarouselElement src={fureverhomes6} alt='...' />

                        </MDBCarouselItem>


                        <MDBCarouselItem itemId={5}>
                            <MDBCarouselElement src={fureverhomes7} alt='...' />

                        </MDBCarouselItem>


                        <MDBCarouselItem itemId={6}>
                            <MDBCarouselElement src={fureverhomes5} alt='...' />

                        </MDBCarouselItem>


                    </MDBCarouselInner>
                    <br></br>
                    <br></br>
                </MDBCarousel>
                <div className='project-text'>

                    <MDBCardText >
                        Project: fureverhomes, is a web application where users can find pets to adopt and or where users can rehome a pet.
                        <br></br>
                        <br></br>
                        Frontend: React,Hooks,Google Maps API,fetch,bootstrap
                        <br></br>
                        Backend: Rails,Serializers,Authentication
                    </MDBCardText>
                </div>
                <br></br>
                <div className='project-buttons'>
                    <MDBBtn href='https://www.youtube.com/watch?v=qvlvBNZ7fGw' className='project-button'>
                        DEMO
                    </MDBBtn>

                    <MDBBtn href='https://github.com/jaym832/phase5-project-frontend' className='project-button' >
                        Front-End
                    </MDBBtn>
                    <MDBBtn href='https://github.com/jaym832/phase5-project-backend2' className='project-button' >
                        Back-End
                    </MDBBtn>

                </div>

            </div>
        )
    }
}

export default FurEverHomes
