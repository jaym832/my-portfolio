import React, { useState, Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com'

import './Contact.css'


function Contact() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_qofzyvw', 'template_28vydm8', e.target, 'user_gMw290SR4jHVVSbqWArD0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()

    }





    return (

        <div className='contact-div'>
            <div className='email-form-div'>
                <div className='contact-text'>
                    Feel free to message me about anything!

                </div>

                <Form onSubmit={sendEmail}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control name='name' />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" name='email' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Subject:</Form.Label>
                        <Form.Control name='subject' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows={3} name='message' />
                    </Form.Group>


                    <div className='button-div'>

                        <Button className='contact-button' variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>



    );
}

export default Contact;