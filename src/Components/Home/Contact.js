import React, { Component } from 'react'
import Footer from '../Home/Footer'


export class Contact extends Component {
    render() {
        return (
            <div>
                <section id="contact" class="main style3 secondary">
                    <div class="content">
                        <header>
                            <h2>Contact Me</h2>
                            <p>Feel free to message me if you have any questions or feedback!</p>
                        </header>
                        <div class="box">
                            <form method="post" action="#">
                                <div class="fields">
                                    <div class="field half"><input type="text" name="name" placeholder="Name" /></div>
                                    <div class="field half"><input type="email" name="email" placeholder="Email" /></div>
                                    <div class="field"><textarea name="message" placeholder="Message" rows="6"></textarea></div>
                                </div>
                                <ul class="actions special">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer />

            </div>
        )
    }
}

export default Contact
