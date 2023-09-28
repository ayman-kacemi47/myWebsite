import React from 'react';
import logo from '../images/logo.jpg';

export default function Navbar() {
  return (
    <div>
      <nav className='nav'>
        <div>
          <h1>
            <a href='#' className='logo-container'>
              <img src={logo} className='logo' /> Ayman_Kacemi{' '}
            </a>
          </h1>
        </div>

        <ul className='nav-ul'>
          <li>
            <a href='#' className='active'>
              Home
            </a>
          </li>
          <li>
            <a href='#about'> About</a>
          </li>
          <li>
            <a href='#projects'>Projects </a>
          </li>
          <li>
            <a href='#uses'>Uses </a>
          </li>
        </ul>

        <div className='lang'>
          <i
            className='fa-solid fa-globe'
            style={{ color: 'rgba(255, 255, 255, 0.733)' }}
          ></i>
          <a>EN</a>
          <a>FR</a>
          <a>AR</a>
        </div>
      </nav>
    </div>
  );
}
