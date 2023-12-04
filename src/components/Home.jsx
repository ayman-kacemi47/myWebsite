import { Trans, useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [t, i18n] = useTranslation();
  const [visitors, setVisitors] = useState();

  return (
    <section className='home-section' id='home'>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {t('visitors')}{' '}
        <a href='https://www.freecounterstat.com' title='html hit counter code'>
          <img
            src='https://counter7.optistats.ovh/private/freecounterstat.php?c=qmzn7l9phg39sjl1sty1yqc4l2t5jskg'
            border='0'
            title='html hit counter code'
            alt='html hit counter code'
          />
        </a>
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
