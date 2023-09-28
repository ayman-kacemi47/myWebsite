import React from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section className='projects-section' id='projects'>
      <h2>Projects</h2>
      <div className='arrowLeft'></div>
      <div className='arrowRight'></div>
      <div className='projects-wrapper'>
      

        <ProjectsCard
          title={'This Website'}
          description={'description about the website'}
          icon={
            <i
              className='fa-brands fa-react'
              style={{ color: 'white', scale: '3.5', opacity: '0.9' }}
            />
          }
          id={1}
        />
        <ProjectsCard
          title={'This Website'}
          description={'description about the website'}
          icon={
            <i
              className='fa-brands fa-react'
              style={{ color: 'white', scale: '3.5', opacity: '0.9' }}
            />
          }
        />
        <ProjectsCard
          title={'This Website'}
          description={'description about the website'}
          icon={
            <i
              className='fa-brands fa-react'
              style={{ color: 'white', scale: '3.5', opacity: '0.9' }}
            />
          }
        />
      </div>
    </section>
  );
};

export default Projects;
