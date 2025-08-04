import React from 'react'
import './Styles/About.css'
import about from './assets/about.png'
const About = () => {
  return (
    <div id='about' className='py-5 min-vh-100 about-section'>
        <div className='row justify-content-center align-items-center'>
        {/* the left part */}
            <div className='col-md-5 pt-3 text-center text-md-start'>
                <h1 className='intro-text'>
                    <div className='display-3'>Hi, I am Monica</div>
                </h1>
                <p className='lead my-4'> A frontend developer based in Nairobi Kenya. I have worked on a range of front-end projects, <br />
                with a focus on creacting interactive web applications that are not only clean but allow for seamless user experience.
                <br />  <br /> My favorite work lies in bringing ideas to life through clean, accessible code; whether it's designing responsive user interfaces with React, writing reusable CSS, or adding interactivity with JavaScript. I especially enjoy crafting layouts that feel smooth and intuitive for the user.
                <br />  <br /> I believe in continuous learning and improvement. In my free time, you'll often find me listening to tech podcasts, exploring new frontend trends, reading about UI/UX best practices, or enjoying good conversations with friends over coffee.</p>
            </div>
            <div className='col-md-5 text-center d-none d-md-block pt-3 about-image'>
                <img src={about} alt="a web image" className='img-fluid pt-3 about-img' />
            </div>
        </div>
    </div>
  )
}

export default About