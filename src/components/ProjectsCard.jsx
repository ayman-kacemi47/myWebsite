import React from 'react';

const ProjectsCard = ({ icon, title, description }) => {
  return (
    <div className='projects-container'>
      <div className='projects-info'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className='projects-img '>{icon}</div>{' '}
      <i
        class='fa-solid fa-circle-chevron-down ButtonShowMore'
        style={{ color: '#989aa0' }}
      ></i>
    </div>
  );
};

export default ProjectsCard;
