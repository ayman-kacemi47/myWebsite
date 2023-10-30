import React from 'react';
import Line from './layouts/line';
import { useTranslation } from 'react-i18next';

const ProgressCard = ({
  icon,
  title,
  startDate,
  endDate,
  description,
  line,
  download,
}) => {
  const [t, i18n] = useTranslation();
  return (
    <div className='progress-container-withLine'>
      <div className='progress-container'>
        <div className='progress-img'>{icon}</div>
        <div className='progress-info'>
          <h4>{title}</h4>
          <h5>
            {startDate}
            <i
              class='fa fa-arrow-right'
              aria-hidden='true'
              style={{ color: '#EB9605' }}
            />
            {endDate}
          </h5>
          <p>{description}</p>
          {download && (
            <a href={download} className='downloadHover' download>
              {t('certificat')} <i class='fas fa-file-download '></i>
            </a>
          )}
        </div>
      </div>
      {line && <Line />}
    </div>
  );
};

export default ProgressCard;
