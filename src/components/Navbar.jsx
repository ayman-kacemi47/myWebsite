import React, { useEffect } from 'react';
import logo from '../images/logo.jpg';
import close from '../images/icons/close.svg';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [t, i18n] = useTranslation();

  useEffect(() => {
    const closeBtn = document.querySelector('#close-nav');
    const openBtn = document.querySelector('#open-nav');
    const navUl = document.querySelector('.nav-ul');

    const pages = document.querySelectorAll('.nav-ul li a');

    const setActiveSection = (sectionId) => {
      pages.forEach((item) => {
        if (item.getAttribute('href') === `#${sectionId}`) {
          pages.forEach((link) => link.classList.remove('active'));
          // no need we will do it based on the cuurent section.id
          item.classList.add('active');
          navUl.style.left = '-100vw';
          closeBtn.style.display = 'none';
          openBtn.style.display = 'block';
        }
      });
    };

    closeBtn.addEventListener('click', () => {
      navUl.style.left = '-100vw';
      closeBtn.style.display = 'none';
      openBtn.style.display = 'block';
    });

    openBtn.addEventListener('click', () => {
      navUl.style.left = '0';
      closeBtn.style.display = 'block';
      openBtn.style.display = 'none';
    });

    document.querySelectorAll('.nav-ul li a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth',
        });

        setActiveSection(targetId);
      });
    });

    let activeSection = 'home';
    document.addEventListener('scroll', function () {
      let prevSection = activeSection;

      document.querySelectorAll('section').forEach(function (section) {
        if (
          section.offsetTop <= window.scrollY &&
          section.offsetTop + section.offsetHeight > window.scrollY
        ) {
          activeSection = section.id;
        }
      });

      if (prevSection !== activeSection) {
        setActiveSection(activeSection);
      }
    });
  }, []);

  return (
    <div>
      <nav className='nav'>
        <div className='SamllNav'>
          <h1>
            <a href='#home' className='logo-container'>
              <img src={logo} className='logo' alt='myPicture' />
              {t('logoText')}
            </a>
          </h1>
          <div id='open-nav'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </div>

          <img src={close} id='close-nav' alt='close_x_logo' />
        </div>

        <ul className='nav-ul'>
          <li>
            <a href='#home' className='active home'>
              {t('homePage')}
            </a>
          </li>
          <li>
            <a href='#about' className='about'>
              {' '}
              {t('aboutPage')}
            </a>
          </li>
          <li>
            <a href='#projects' className='projects'>
              {t('ProjectsPages')}{' '}
            </a>
          </li>
          <li>
            <a href='#uses' className='uses'>
              {t('UsesPages')}{' '}
            </a>
          </li>
          <div id='responsive-bar'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </div>
          <div className='lang'>
            <i
              className='fa-solid fa-globe'
              style={{ color: 'rgba(255, 255, 255, 0.733)', margin: '0 1rem' }}
            ></i>
            {i18n.language !== 'en' && (
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                }}
              >
                EN
              </button>
            )}
            {i18n.language !== 'fr' && (
              <button
                onClick={() => {
                  i18n.changeLanguage('fr');
                }}
              >
                FR
              </button>
            )}
            {i18n.language !== 'ar' && (
              <button
                onClick={() => {
                  i18n.changeLanguage('ar');
                }}
              >
                AR
              </button>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
}
