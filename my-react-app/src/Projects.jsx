import React from 'react';
import './Styles/Projects.css';

const Projects = () => {
  return (
    <section className="project-section position-relative">
      {/* Top wave */}
      <div className="custom-top-shape-curve"></div>

      <div className="container py-5 text-center">
        <h2 className="mb-4">My Work</h2>
        <p className="lead text-muted">
          Here are a few projects I have built so far
        </p>
      </div>

      {/* Bottom wave */}
      <div className="custom-bottom-shape-curve"></div>
    </section>
  );
};

export default Projects;
