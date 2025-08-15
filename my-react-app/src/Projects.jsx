import React from 'react';
import './Styles/Projects.css';
import keja from './assets/kejaprime.jpeg';
import shopi from './assets/shopi.jpeg';
import share from './assets/share.jpeg';
import shec from './assets/shec.jpeg';



const Projects = () => {
  return (
    <>
    <div className='top-curve-section'>

    </div>
    <section id='projects' className='projects-section text-center pt-0' >
      <div className='container py-5'>
        <h2 className='mb-4'>My Current Live Projects</h2>
        <p className='lead'>Here are a few projects I have created using my knowledge in React.js</p>
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
            <img src={shopi} alt="shop-mtaani website" className='project-img' />
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
        <div className='col-md-4 mb-4'>
          <div className='project-card'>
            <img src={share} alt="shareitall website" className='project-img' />
            <div className='project-overlay'>
              <div className='content'>
                <h5>ShareIt_All</h5>
                <p>I built this project using React, Java Script, boostrap, and CSS. Basically, it is all about selling and bying used items.
                  With this platform, a user can showcase their used items they are willing to resell at a cheaper prices.
                  There is also the option of free items, which is unique about this website becuase it has a social aspect of helping the needy.
                </p>
                <a href="https://shareit-all.vercel.app/" className='btn btn-light btn-sm' target="_blank" rel="noopener noreferrer"> View project</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className='project-card'>
            <img src={shec} alt="she codes website" className='project-img' />
            <div className='project-overlay'>
              <div className='content'>
                <h5>She Codes</h5>
                <p>I designed and developed this interactive website to promote she codes, a website to empower women to code. 
                  I built it using HTML, javascript, and Bootstrap
                </p>
                <a href="https://eshihanda.github.io/my-workspace/" className='btn btn-light btn-sm' target="_blank" rel="noopener noreferrer"> View project</a>
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