import React from 'react';


const ProjectsCard = ({ icon, title, description, hoverMessage = "",  disabled = false }) => {
  const handleClick = (event) => {
   
      event.currentTarget.parentElement.classList.toggle('openProject');
      event.currentTarget.classList.toggle('RotateButton');
    
  };

  return (
    <div className={`projects-container`}>
      <div className='projects-info'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={`projects-img ${disabled ? 'disabled' : ''}`} >{icon} {disabled && <div className="hover-message">{hoverMessage}</div>}</div>
      <i
        className='fa-solid fa-circle-chevron-down ButtonShowMore'
        style={{ color: '#989aa0' }}
        onClick={handleClick}
      ></i>
     
    </div>
  );
};

export default ProjectsCard;