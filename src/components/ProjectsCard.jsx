import React from 'react';
import './ProjectsCard.css'; // Import the CSS file

const ProjectsCard = ({ icon, title, description, hoverMessage = "",  disabled = false }) => {
  const handleClick = (event) => {
    if (!disabled) {
      event.currentTarget.parentElement.classList.toggle('openProject');
      event.currentTarget.classList.toggle('RotateButton');
    }
  };

  return (
    <div className={`projects-container ${disabled ? 'disabled' : ''}`}>
      <div className='projects-info'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className='projects-img'>{icon}</div>
      <i
        className='fa-solid fa-circle-chevron-down ButtonShowMore'
        style={{ color: '#989aa0' }}
        onClick={handleClick}
      ></i>
      {disabled && <div className="hover-message">{hoverMessage}</div>}
    </div>
  );
};

export default ProjectsCard;