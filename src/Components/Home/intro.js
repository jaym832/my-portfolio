import { pi } from 'prelude-ls'
import React, { Component } from 'react'
import pic from './images/jj.png'

export class intro extends Component {
    render() {
        return (
            <div>

                <section id="intro" class="main style1 dark fullscreen">
                    <div class="content">
                        <header>
                            <h2>Hey.</h2>
                        </header>
                        <div>
                            <img className='intro-pic' src={pic}></img>
                        </div>
                        <p>Welcome to my portfolio hope you enjoy it!</p>
                        <footer>
                            <a href="/#about" class="button style2 down">More</a>
                        </footer>
                    </div>
                </section>

            </div>
        )
    }
}

export default intro
