import React, { useEffect } from 'react';
import ProjectsCard from './ProjectsCard';
import ReactLaravel from '../images/icons/reactAndLaravel.png';
import HtmlCssJs from '../images/icons/htmlCssJs.png';
import Mern from '../images/icons/Mern.png';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Projects = () => {
  const [t, i18n] = useTranslation();
  const dir = i18n.dir() === 'rtl' ? -1 : 1; //si right to left on doit changes la logique de Js
  console.log(' dir rtl = -1  else -1  ::::  ', dir);
  useEffect(() => {
    const projectsList = document.querySelector('.projects-wrapper');
    const slideButtons = document.querySelectorAll(
      '.projects-section .slide-btn'
    );
    const maxScrollLeft = projectsList.scrollWidth - projectsList.clientWidth;
    console.log('max ', maxScrollLeft);

    slideButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const direction = button.id === 'arrowLeft' ? -1 : 1;
        const scrollAmount = (250 + projectsList.clientWidth * 0.1) * direction;
        projectsList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    });

    const handleHideArrow = () => {
      if (dir === -1) {
        // dir === -1  donc c'est l'arabe
        slideButtons[0].style.display =
          projectsList.scrollLeft >= 0 ? 'none' : 'block';
        slideButtons[1].style.display =
          projectsList.scrollLeft <= maxScrollLeft * dir + 10 // + 10  c'est comme incertitude , + parceque la valeur est negatif
            ? 'none'
            : 'block';
      } else {
        slideButtons[0].style.display =
          projectsList.scrollLeft <= 0 ? 'none' : 'block';
        slideButtons[1].style.display =
          projectsList.scrollLeft >= maxScrollLeft - 10 ? 'none' : 'block';
      }
    };

    projectsList.addEventListener('scroll', () => {
      handleHideArrow();
    });
  });

  const moreInfos = document.querySelectorAll('.ButtonShowMore');
  console.log('item 1: ', moreInfos);
  moreInfos.forEach((item) => {
    if (!item.hasClickListener) {
      // if pour eviter d'ajouter plusieur event listner a le meme element
      item.addEventListener('click', function () {
        item.parentElement.classList.toggle('openProject');
        item.classList.toggle('RotateButton');
      });
      item.hasClickListener = true;
    }
  });

  return (
    <section className='projects-section' id='projects'>
      <h2>{t('projectsSectionTitle')}</h2>
      <h6 className='h6ClickLogo' style={{ textAlign: 'center' }}>
        {t('ClickLogoText')}
      </h6>
      <div
        id={dir === 1 ? 'arrowLeft' : 'arrowRight'}
        className=' slide-btn'
        style={{ display: 'none' }}
      ></div>
      <div
        id={dir === 1 ? 'arrowRight' : 'arrowLeft'}
        className=' slide-btn'
      ></div>
      <div className='projects-wrapper'>
        <ProjectsCard
          title={t('ThisProjectTitle')}
          description={t('ThisProjectDesc')}
          icon={
            <a href='#'>
              <i
                className='fa-brands fa-react'
                style={{ color: 'white', scale: '3.5', opacity: '0.9' }}
              />
            </a>
          }
          id={1}
        />
        <ProjectsCard
          title={t('PFETitle')}
          description={t('PFEDesc')}
          icon={
            <img
              alt='React and laravel logos'
              src={ReactLaravel}
              style={{ height: '83px', margin: 'auto', opacity: '0.8' }}
            />
          }
        />
        <ProjectsCard
          title={t('ToDoTitle')}
          description={t('ToDoDesc')}
          icon={
            <img
              alt=' html,css an JavaScript logos'
              src={HtmlCssJs}
              style={{ height: '83px', margin: 'auto', opacity: '0.8' }}
            />
          }
        />
        <ProjectsCard
          title={t('DevConnecterTitle')}
          description={t('DevConnecterDesc')}
          icon={
            <img
              alt='Mern Logo'
              src={Mern}
              style={{ height: '100px', margin: 'auto', opacity: '0.8' }}
            />
          }
        />
        <ProjectsCard
          title={t('WeatherAppTitle')}
          description={t('WeatherAppDesc')}
          icon={
            <a href='https://ak-47-weather-app.vercel.app/' target='_blank'>
              <i
                className='fa-brands fa-react'
                style={{ color: 'white', scale: '3.5', opacity: '0.9' }}
              />
            </a>
          }
        />
      </div>
    </section>
  );
};

export default Projects;
