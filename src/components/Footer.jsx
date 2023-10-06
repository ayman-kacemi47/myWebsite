import React, { useState } from 'react';
import linkedinLogo from '../images/icons/LinkedIn_icon.svg';
import GithubLogo from '../images/icons/github-mark.svg';
import PhoneLogo from '../images/icons/phone.svg';
import mailLogo from '../images/icons/mail.svg';
import instgram from '../images/icons/instagram-logo.svg';

const Footer = () => {
  const [showHhoneNumber, setShowPhone] = useState(false);
  const year = new Date().getFullYear();
  console.log(' ae ', year);
  return (
    <div className='footer'>
      <div className='reseau'>
        <div>
          <a
            href='https://www.linkedin.com/in/ayman-kacemi-439411197/'
            target='blank'
          >
            <img src={linkedinLogo} className='svg-icon' />
          </a>
        </div>
        <div>
          <a href='https://github.com/ayman-kacemi47' target='blank'>
            {' '}
            <img src={GithubLogo} className='svg-icon' />
          </a>
        </div>
        <div style={{ position: 'relative' }}>
          <a href='tel:+212601249845' className='phoneLogo'>
            <img src={PhoneLogo} className='svg-icon' />
          </a>
          <div class='PhoneHide'>+212601249845</div>
        </div>
        <div>
          <a href='mailto:aymankacemi01@gmail.com'>
            <img src={mailLogo} className='svg-icon' />
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/kacemi47/' target='blank'>
            <img src={instgram} className='svg-icon' />
          </a>
        </div>
      </div>

      <div>
        <i class='fa fa-copyright' aria-hidden='true'></i>
        {year} Ayman Kacemi (AK47)
      </div>
    </div>
  );
};

export default Footer;
