import React, { Component } from 'react'

export class AboutMe extends Component {
    render() {
        return (
            <div>
                <section id="about" class="main style2 right dark fullscreen">
                    <div class="content box style2">
                        <header>
                            <h2>About me</h2>
                        </header>
                        <p className='aboutme-info'>My name is Javier Marin and i am a junior full stack developer. I am currently a senior at the University of Houston where i am majoring in Computer Information Systems. I am also a graduate in the Software engineering program at Flatiron school.

                            Programming is a bittersweet art form for me. One minute i could be loving it and then the next i could be wanting to tear my hair out trying to debug an error, but thats what i enjoy about it, the challenge and the gratification i get from it.
                            I am always up for collaborating with others and learning as well as contributing to projects.
                            <br></br>
                            When im not typing away at my keyboard you can find me hanging out with family,watching a movie, working out, or reading</p>
                    </div>
                    <a href="#work" class="button style2 down anchored">Next</a>
                </section>
            </div>
        )
    }
}

export default AboutMe
