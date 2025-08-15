import React from 'react'
import './Styles/Home.css'
import about from './assets/about.png'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div id='about' className='pt-5 pb-2 mt-5  min-vh-100 about-section' style={{ paddingTop: "100px" }}>
        <div className='row justify-content-center align-items-center'>
        {/* the left part */}
            <div className='col-md-5 d-flex flex-column justify-content-center pt-3 text-center text-md-start'>
                <h1 className='intro-text'>
                    <div className='display-3'>Hi, I am Monica</div>
                </h1>
                <p className='lead my-4'> I am a passionate Frontend Developer from Kenya. I build interactive web applications that are not only clean but allow for seamless user experience.
                <br />  <br /> My favorite work lies in bringing ideas to life through clean, accessible code; whether it's designing responsive user interfaces with React, writing reusable CSS, or adding interactivity with JavaScript.
                </p>
                <div className='mt-3 '>
                    <a href="/resume.pdf" download="Monica_Eshihanda_Resume.pdf" className='btn'>Download Resume</a>
                </div>
            </div>
            <div className='col-md-5 text-center d-none d-md-block pt-3 about-image'>
                <div className='img-items'>
                    <img src={about} alt="a web image" className='about-img' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home