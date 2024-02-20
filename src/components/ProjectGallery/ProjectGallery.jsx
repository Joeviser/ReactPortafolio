import React from 'react';
import Project from '../Project/Project';
import projectInfo from '../../../projects.json';
//import './ProjectGallery.css';

function ProjectGallery() {
  return (
    <div className="project-list">
      {projectInfo.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGallery;






