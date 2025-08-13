import React from 'react'
import './Styles/Home.css'
import about from './assets/about.png'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div id='about' className='py-5 mt-5  min-vh-100 about-section' style={{ paddingTop: "100px" }}>
        <div className='row justify-content-center align-items-center'>
        {/* the left part */}
            <div className='col-md-5 d-flex flex-column justify-content-center pt-3 text-center text-md-start'>
                <h1 className='intro-text'>
                    <div className='display-3'>Hi, I am Monica</div>
                </h1>
                <h2 className='fw-bold' style={{ padding: "-10px", fontSize: "28px" }}>I am a passionate Frontend Developer from Kenya</h2>
                <p className='lead my-4'> I build interactive web applications that are not only clean but allow for seamless user experience.
                <br />  <br /> My favorite work lies in bringing ideas to life through clean, accessible code; whether it's designing responsive user interfaces with React, writing reusable CSS, or adding interactivity with JavaScript.
                </p>
                <div className="social-icons d-flex justify-content-center gap-4 flex-wrap">
                       <a href="/resume.pdf" download="Monica_Eshihanda_Resume.pdf" className='btn'>Download Resume</a>
                        <div className='soc'>
                            <a
                                href="https://github.com/eshihanda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-grey"
                                >
                                <FaGithub size={22} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/monicah-wamaya-89913714a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue"
                                >
                                <FaLinkedin size={22} />
                            </a>
                            <a
                                href="https://x.com/MEshihanda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-aqua"
                                >
                                <FaTwitter size={22} />
                            </a>
                            <a
                                href="eshihandamonn@gmail.com"
                                className="text-black"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                            <FaEnvelope size={22} />
                            </a>
                        </div>
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