import React from 'react';
import './Styles/Projects.css';
import keja from './assets/kejaprime.jpeg';
import shop from './assets/shop.jpeg';

const Projects = () => {
  return (
    <>
    <div className='top-curve-section'>

    </div>
    <section className='projects-section text-center'>
      <div className='container py-5'>
        <h2 className='mb-4'>My Current Live Projects</h2>
        <p className='lead text-muted'>Here are a few projects I have created using my knowledge in React.js</p>
      </div>
      <div className='row'>
        <div className='col-md-4 mb-4'>
          <div className='project-card'>
            <img src={keja} alt="kejaprime website" className='project-img' />
            <div className='project-overlay'>
              <div className='content'>
                <h5>KejaPrime</h5>
                <p>A real estate website that allows users to rent houses online. Built using python and fast api as well as react.js</p>
                <a href="https://kejaprime.vercel.app" className='btn btn-light btn-sm' target="_blank" rel="noopener noreferrer"> View project</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className='project-card'>
            <img src={shop} alt="shop-mtaani website" className='project-img' />
            <div className='project-overlay'>
              <div className='content'>
                <h5>KejaPrime</h5>
                <p>I built this project using React, Java Script, boostrap, and CSS. Basically, a buyer can locate seller online 
                  in their local communities and buy from sellers. The project enables easy access to local products, promoting local e-commerce and convinience.
                </p>
                <a href="https://shop-mtaani-742u.vercel.app/" className='btn btn-light btn-sm' target="_blank" rel="noopener noreferrer"> View project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className='bottom-curve-section'></div>
    </>
  );
};

export default Projects;
