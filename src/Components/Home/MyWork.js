import React, { Component } from 'react'
import fureverimage from '../fureverhomes.png'
import nutrition from '../nutrition-app.png'
import spacecowboy from '../spacecowboy.png'
export class MyWork extends Component {
    render() {
        return (
            <div>
                <section id="work" class="main style3 primary">
                    <div class="content">
                        <header>
                            <h2>My Work</h2>
                            <p>During my time in flatiron, I have developed a variety of different applications. Each one challenging but a great learning experience. I plan on developing more applications that I can include on here. </p>
                        </header>


                        <div class="gallery" >
                            <article class="from-left">
                                <a href="/fureverhomes" class="image fit"><img src={fureverimage} title="The Anonymous Red" alt="" /></a>
                            </article>
                            <article class="from-right">
                                <a href="/nutrition" class="image fit"><img src={nutrition} title="Airchitecture II" alt="" /></a>
                            </article>
                            <article class="from-left">
                                <a href="/spacecowboy" class="image fit"><img src={spacecowboy} title="Air Lounge" alt="" /></a>
                            </article>

                        </div>


                        <a href="#contact" class="button style2 down anchored">Next</a>

                    </div>
                </section>
            </div>
        )
    }
}

export default MyWork
