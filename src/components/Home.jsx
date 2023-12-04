import { Trans, useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import countapi from 'countapi-js';

const Home = () => {
  const [t, i18n] = useTranslation();
  const [visitors, setVisitors] = useState();

  useEffect(() => {
    countapi.visits('ayman-kacemi-website.onrender.com').then((result) => {
      console.log(result.value);
      setVisitors(result.value);
    });
  }, []);

  return (
    <section className='home-section' id='home'>
      <div style={{ textAlign: 'center' }}>
        {t('visitors')}{' '}
        <span
          style={{ color: '#ff9a34', fontSize: '1.25rem', fontWeight: '700' }}
        >
          {visitors}
        </span>
      </div>
      <div>
        <h1>
          <Trans i18nKey='homeTitle'>
            0<span style={{ color: '#fcd018' }}>1</span>
            <span style={{ color: '#e76c0b' }}>2</span>
          </Trans>
        </h1>
        <p>
          <Trans i18nKey='homeDescription'>
            0
            <a
              href='https://www.thefreedictionary.com/portraitist#:~:text=1.,painter%20%2D%20an%20artist%20who%20paints'
              target='_blank'
            >
              1
            </a>
            <span style={{ display: 'block' }}>  2</span>
          </Trans>
        </p>
      </div>
    </section>
  );
};

export default Home;
