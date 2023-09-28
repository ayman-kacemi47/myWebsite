import React from 'react';
import ProgressCard from './ProgressCard';

function calcAge() {
  const today = new Date();
  const birthDate = new Date(2001, 10, 19);
  const age = today.getFullYear() - birthDate.getFullYear();
  return age;
}

const About = () => {
  return (
    <section className='about-section' id='about'>
      <h1>About</h1>
      <div>
        <p>
          <i class='fa fa-calendar' aria-hidden='true' /> 2001/10/19 (
          <span style={{ color: '#EB9605' }}>{calcAge()}</span>)
        </p>
        <p>
          <i class='fa fa-map-marker' aria-hidden='true' />
          Morocco, <span style={{ color: '#EB9605' }}> Casablanca</span>
        </p>
      </div>
      <div className='cards'>
        <h2>Education</h2>
        <ProgressCard
          title={'Title'}
          icon={
            <i
              className='fa-solid fa-graduation-cap'
              style={{ color: 'white', scale: '3.5', opacity: '0.66' }}
            ></i>
          }
          startDate={'oct 2020 '}
          endDate={' jul 2022 '}
          description={'This is and description of what i want to say.'}
          line={true}
        />
        <ProgressCard
          title={'Title'}
          icon={
            <i
              className='fa-solid fa-graduation-cap'
              style={{ color: 'white', scale: '3.5', opacity: '0.66' }}
            ></i>
          }
          startDate={'oct 2020 '}
          endDate={' jul 2022 '}
          description={'This is and description of what i want to say.'}
        />
      </div>

      <div className='cards'>
        <h2>Courses</h2>
        <ProgressCard
          title={'Title'}
          icon={
            <i
              className='fa-solid fa-book-open'
              style={{ color: 'white', scale: '3.5', opacity: '0.66' }}
            ></i>
          }
          startDate={'oct 2020 '}
          endDate={' jul 2022 '}
          description={'This is and description of what i want to say.'}
          line={true}
        />
        <ProgressCard
          title={'Title'}
          icon={
            <i
              className='fa-solid fa-book-open'
              style={{ color: 'white', scale: '3.5', opacity: '0.66' }}
            ></i>
          }
          startDate={'oct 2020 '}
          endDate={' jul 2022 '}
          description={'This is and description of what i want to say.'}
        />
      </div>
    </section>
  );
};

export default About;
