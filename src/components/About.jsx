import React from 'react';
import ProgressCard from './ProgressCard';
import { useTranslation } from 'react-i18next';
function calcAge() {
  const today = new Date();
  const birthDate = new Date(2001, 10, 19);
  const age = today.getFullYear() - birthDate.getFullYear();
  return age;
}

const About = () => {
  const [t, i18n] = useTranslation();
  return (
    <section className='about-section' id='about'>
      <h1>{t('aboutSectionTitle')}</h1>
      <div>
        <a
          className='downloadCV downloadHover'
          href='CV.pdf'
          download={'cv_KACEMI_Ayman_developpeur_web_et_mobile_full-stack.pdf'}
        >
          <i
            className='fa-solid fa-circle-down'
            style={{ color: '#ff9a34' }}
          ></i>
          {t('cv')}
        </a>
      </div>
      <div>
        <a
          className='downloadCV downloadHover'
          href='lettre_de_motivation.pdf'
          download={'lettre_de_motivation_KACEMI_Ayman.pdf'}
        >
          <i
            className='fa-solid fa-circle-down'
            style={{ color: '#ff9a34' }}
          ></i>
          {t('lettreMotivation')}
        </a>
      </div>
      <div>
        <p>
          <i className='fa fa-calendar' aria-hidden='true' /> 2001/10/19 (
          <span style={{ color: '#EB9605' }}>{calcAge()}</span>)
        </p>
        <p>
          <i className='fa fa-map-marker' aria-hidden='true' />
          {t('aboutCountry')},{' '}
          <span style={{ color: '#EB9605' }}> {t('aboutCity')}</span>
        </p>
      </div>
      <div className='cardsContainer'>
        <div className='cards'>
          <h2>{t('aboutEducationTitle')}</h2>
          <ProgressCard
            title={t('master')}
            icon={
              <i
                className='fa-solid fa-graduation-cap'
                style={{ color: 'white', scale: '3.5', opacity: '0.66' }}
              ></i>
            }
            startDate={t('masterStartDate')}
            endDate={t('masterEndDate')}
            description={t('masterDescription')}
            line={true}
          />
            <ProgressCard
              title={t('title1Licence')}
              icon={
                <i
                  className='fa-solid fa-graduation-cap'
                  style={{ color: 'white', scale: '3.5', opacity: '0.66' }}
                ></i>
              }
              startDate={t('LicenceStartDate')}
              endDate={t('LicenceEndDate')}
              description={t('LicenceDescrtiption')}
              download={'Licence.pdf'}
              line={true}
            />
       
          <ProgressCard
            title={t('title1Deug')}
            icon={
              <i
                className='fa-solid fa-graduation-cap'
                style={{ color: 'white', scale: '3.5', opacity: '0.66' }}
              ></i>
            }
            startDate={t('DeugStartDate')}
            endDate={t('DeugEndDate')}
            description={t('DeugDescrtiption')}
            line={true}
          />
             <ProgressCard
            title={t('title1Bac')}
            icon={
              <i
                className='fa-solid fa-graduation-cap'
                style={{ color: 'white', scale: '3.5', opacity: '0.66' }}
              ></i>
            }
            startDate={t('BacStartDate')}
            endDate={t('BacEndDate')}
            description={t('BacDescription')}
            
          />
        </div>

        <div className='cards'>
          <h2>{t('aboutCoursesTitle')}</h2>
          <ProgressCard
            title={t('title1Mern')}
            icon={
              <i
                className='fa-solid fa-book-open'
                style={{ color: 'white', scale: '3.5', opacity: '0.66' }}
              ></i>
            }
            startDate={t('MernStartDate')}
            endDate={t('MernEndDate')}
            description={t('MernDescrtiption')}
            line={true}
            download={'ayman_kacemi_MERN_certificat.pdf'}
          />
          <ProgressCard
            title={t('title1FullWeb')}
            icon={
              <i
                className='fa-solid fa-book-open'
                style={{
                  color: 'white',
                  scale: '3.5',
                  opacity: '0.66',
                  transfrom: i18n.dir() === 'rtl' ? 'rotate(180deg)' : '', // maybe the RLTCSS could fix it later , with thar radius corners problem
                }}
              ></i>
            }
            startDate={t('title1FullWebStartDate')}
            endDate={t('title1FullWebEndDate')}
            description={t('title1FullWebDescrtiption')}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
