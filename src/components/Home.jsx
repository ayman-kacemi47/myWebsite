import { Trans, useTranslation } from 'react-i18next';
import React from 'react';

const Home = () => {
  const [t, i18n] = useTranslation();
  return (
    <section className='home-section' id='home'>
      <div>
        <h1>
          <Trans i18nKey='homeTitle'>
            0<span style={{ color: '#fcd018' }}>1</span>
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
