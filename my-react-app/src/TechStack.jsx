import React from 'react';
import './Styles/TechStack.css';
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';

const TechStack = () => {
  return (
    <section className='techstack-section' id='techstack'>
        <div className='container text-center py-5'>
            <h2 className='section-title mb-5' >Tech Stack</h2>
        </div>
        <div className='row justify-content-center'>
            <div className='col-md-4 mb-4'>
                <div className='tech-card shadow'>
                    <FaReact className='tech-icon react' />
                    <h4 className='fw-bold'>React</h4>
                    <p>Skilled in creating interactive and efficient front-end applications with a strong emphasis on component-based structure</p>
                </div>
            </div>
            <div className='col-md-4 mb-4'>
                <div className='tech-card shadow'>
                    <FaJs className='tech-icon js' />
                    <h4 className='fw-bold'>JavaScript</h4>
                    <p>Proficient in building interactive and dynamic web applications using java script ES6 with a focus on seamless user interactions and functionality</p>

                </div>
            </div>
            <div className='col-md-4 mb-4'>
                <div className='tech-card shadow'>
                    <FaHtml5 className='tech-icon html' />
                    <FaCss3Alt className='tech-icon css' />
                    <h4 className='fw-bold'>HTML & CSS</h4>
                    <p>Highly skilled in HTML and CSS, adeptly creating visually appealing and responsive websites for better user experience</p>

                </div>
            </div>
        </div>
    </section>
  )
};

export default TechStack;
