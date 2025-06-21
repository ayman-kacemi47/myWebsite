import React from 'react';
import { useTranslation } from 'react-i18next';

const Uses = () => {
  const [t, i18n] = useTranslation();
  return (
    <section id='uses'>
      <h1 style={{ textAlign: 'center', margin: '48px' }}>
        {t('usesSectionTitle')}
      </h1>
      <ul>
        <li>
          <strong>{t('usesLaptop')}</strong> HP EliteBook 840 G6
        </li>
        <li>
          <strong>{t('usesOperatingSystem')}</strong> Windows 11 Professionnel 64-bit
        </li>
        <li>
          <strong>{t('usesProcessor')}</strong> Intel(R) Core(TM) i5-8365U CPU @ 1.60GHz (8 CPUs), ~1.9GHz
        </li>
        <li>
          <strong>{t('usesMemory')}</strong> 32GB RAM
        </li>
        <li>
          <strong>{t('usesCardName')}</strong> Intel(R) UHD Graphics 620
        </li>
        <li>
          <strong>{t('usesApplications')}</strong> IntelliJ IDEA, VS Code, Chrome, Postman, Figma, Adobe Photoshop...
        </li>
        <li>
          <strong>{t('usesPhone')}</strong> Redmi Note 10 Pro and Galaxy A2 Core
        </li>
      </ul>
    </section>
  );
};

export default Uses;
