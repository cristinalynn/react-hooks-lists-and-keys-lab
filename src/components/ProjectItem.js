import React from "react";

function ProjectItem({ name, about, technologies }) {
  const projectList = technologies.map(technology => (
    <span key={technology}> {technology}</span>
  ))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies"> {projectList}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
