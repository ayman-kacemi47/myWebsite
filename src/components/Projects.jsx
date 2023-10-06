import React, { useEffect } from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  useEffect(() => {
    const projectsList = document.querySelector('.projects-wrapper');
    const slideButtons = document.querySelectorAll(
      '.projects-section .slide-btn'
    );
    const maxScrollLeft = projectsList.scrollWidth - projectsList.clientWidth;
    // console.log('slide buttons node ', slideButtons);

    slideButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const direction = button.id === 'arrowLeft' ? -1 : 1;
        const scrollAmount = (250 + projectsList.clientWidth * 0.1) * direction;
        projectsList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    });
    // console.log(
    //   projectsList.scrollLeft,
    //   ' >= ',
    //   maxScrollLeft,
    //   'v:none  f:block'
    // );

    const handleHideArrow = () => {
      slideButtons[0].style.display =
        projectsList.scrollLeft <= 0 ? 'none' : 'block';
      slideButtons[1].style.display =
        projectsList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
    };

    projectsList.addEventListener('scroll', () => {
      handleHideArrow();
    });
  });

  return (
    <section className='projects-section' id='projects'>
      <h2>Projects</h2>
      <div
        id='arrowLeft'
        className=' slide-btn'
        style={{ display: 'none' }}
      ></div>
      <div id='arrowRight' className=' slide-btn'></div>
      <div className='projects-wrapper'>
        <ProjectsCard
          title={'This Website 1'}
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
          title={'This Website 2'}
          description={'description about the website'}
          icon={
            <i
              className='fa-brands fa-react'
              style={{ color: 'white', scale: '3.5', opacity: '0.9' }}
            />
          }
        />
        <ProjectsCard
          title={'This Website 3'}
          description={'description about the website'}
          icon={
            <i
              className='fa-brands fa-react'
              style={{ color: 'white', scale: '3.5', opacity: '0.9' }}
            />
          }
        />
        <ProjectsCard
          title={'This Website 4'}
          description={'description about the website'}
          icon={
            <i
              className='fa-brands fa-react'
              style={{ color: 'white', scale: '3.5', opacity: '0.9' }}
            />
          }
        />
        <ProjectsCard
          title={'This Website 5'}
          description={'description about the website'}
          icon={
            <i
              className='fa-brands fa-react'
              style={{ color: 'white', scale: '3.5', opacity: '0.9' }}
            />
          }
        />
        <ProjectsCard
          title={'This Website 6'}
          description={'description about the website'}
          icon={
            <i
              className='fa-brands fa-react'
              style={{ color: 'white', scale: '3.5', opacity: '0.9' }}
            />
          }
        />
      </div>
      {/* <div className='projects-map' style={{ display: 'flex' }}>
        <span style={style}></span>
        <span style={style}></span>
        <span style={style}></span>
      </div> */}
    </section>
  );
};
// const style = {
//   display: 'block',
//   margin: '1rem',
//   minWidth: '15px',
//   minHeight: '15px',
//   backgroundColor: '#ff9a34',
//   border: '1px solid black',
//   borderRadius: '50px',
//   opacity: '0.5',
// };
export default Projects;
