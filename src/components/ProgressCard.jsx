import React from 'react';
import Line from './layouts/line';

const ProgressCard = ({
  icon,
  title,
  startDate,
  endDate,
  description,
  line,
}) => {
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
        </div>
      </div>
      {line && <Line />}
    </div>
  );
};

export default ProgressCard;
