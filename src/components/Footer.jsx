import React, { useState } from 'react';
import linkedinLogo from '../images/icons/LinkedIn_icon.svg';
import GithubLogo from '../images/icons/github-mark.svg';
import PhoneLogo from '../images/icons/phone.svg';
import mailLogo from '../images/icons/mail.svg';
import instgram from '../images/icons/instagram-logo.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [showHhoneNumber, setShowPhone] = useState(false);
  const [t, i18n] = useTranslation();
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='reseau'>
        <div>
          <a
            href='https://www.linkedin.com/in/ayman-kacemi-439411197/'
            target='blank'
            rel='noopener noreferrer'
          >
            <img src={linkedinLogo} className='svg-icon' alt='linkedin logo' />
          </a>
        </div>
        <div>
          <a
            href='https://github.com/ayman-kacemi47'
            target='blank'
            rel='noopener noreferrer'
          >
            {' '}
            <img src={GithubLogo} className='svg-icon' alt='github logo' />
          </a>
        </div>
        <div style={{ position: 'relative' }}>
          <a
            href='tel:+212601249845'
            className='phoneLogo'
            rel='noopener noreferrer'
          >
            <img src={PhoneLogo} className='svg-icon' alt='phone logo' />
          </a>
          <div className='PhoneHide'>{t('phoneNumber')}</div>
        </div>
        <div>
          <a href='mailto:aymankacemi01@gmail.com' rel='noopener noreferrer'>
            <img src={mailLogo} className='svg-icon' alt='mail logo' />
          </a>
        </div>
        <div>
          <a
            href='https://www.instagram.com/kacemi47/'
            target='blank'
            rel='noopener noreferrer'
          >
            <img src={instgram} className='svg-icon' alt='instagram logo' />
          </a>
        </div>
      </div>

      <div>
        <i className='fa fa-copyright' aria-hidden='true'></i>
        {year} Ayman Kacemi (AK47)
      </div>
    </div>
  );
};

export default Footer;
