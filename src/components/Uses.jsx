import React from 'react';
import { useTranslation } from 'react-i18next';

const Uses = () => {
  const [t, i18n] = useTranslation();
  return (
    <section id='uses'>
      <h1 style={{ textAlign: 'center', margin: '48px' }}>
        {' '}
        {t('usesSectionTitle')}{' '}
      </h1>
      <ul>
        <li>
          <strong> {t('usesLaptop')} </strong> hp elitebook x360 1030 g2
        </li>
        <li>
          {' '}
          <strong>{t('usesOperatingSystem')}</strong> Windows 10 Professionnel
          64-bit
        </li>
        <li>
          <strong>{t('usesProcessor')}</strong> Intel(R) Core(TM) i5-7200U CPU @
          2.50GHz (4 CPUs), ~2.7GHz
        </li>
        <li>
          <strong>{t('usesApplications')}</strong> VS Code, Chrome, Postman,
          Figma, Adobe Photoshop ...
        </li>
        <li>
          <strong>{t('usesMemory')}</strong> 8GB RAM
        </li>
        <li>
          <strong> {t('usesCardName')} </strong> Intel(R) HD Graphics 620
        </li>
        <li>
          <strong>{t('usesPhone')} </strong> Redmi note 10 pro and Galaxy A2
          Core
        </li>
      </ul>
    </section>
  );
};

export default Uses;
