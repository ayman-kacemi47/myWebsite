import React from 'react';

const Home = () => {
  return (
    <section className='home-section' id='home'>
      <h1>
        Hi there<span style={{ color: '#fcd018' }}>,</span> I'm{' '}
        <span style={{ color: '#e76c0b' }}>Ayman</span>
      </h1>
      <p>
        Im a beginer developer,
        <a
          href='https://www.thefreedictionary.com/portraitist#:~:text=1.,painter%20%2D%20an%20artist%20who%20paints'
          target='_blank'
        >
          portraitist
        </a>
        and a football lover.
        <br />
        Just trying to start my profesionel carriere as a{' '}
        <strong>FULL-STACK </strong>
        developer.
      </p>
    </section>
  );
};

export default Home;
