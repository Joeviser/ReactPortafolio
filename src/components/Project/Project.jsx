import React from 'react';
import { Link } from 'react-router-dom';
import '../Project/Project.css';

function Project({ project }) {
  const { id, title, description, image, deployedLink, githubLink} = project;

  return (
    <div className="project">
      <h2>{title}</h2>
      <p>Link to deployed version: <a href={deployedLink} target="_blank" rel="noopener noreferrer">{deployedLink}</a></p>
      <p>Link to GitHub repository: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a></p>
      <img src={image} alt={`${title} Screenshot`} />
    
    </div>
  );
}

export default Project;