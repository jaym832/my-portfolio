import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <h1><a href='/'>Welcome</a></h1>
                    <nav>
                        <ul>
                            <li><a href="/#intro">Intro</a></li>
                            <li><a href="/#about">About Me</a></li>
                            {/* <li><a href="#two">Who I Am</a></li> */}
                            <li><a href="/#work">My Work</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>



            </div>
        )
    }
}

export default Navbar
