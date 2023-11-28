import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div>
      <h1 className='projects-heading'>My Projects</h1>
      {projects.map((project) => (
        <ProjectItem key={project.name} {...project} />
      ))}
    </div>
  )
  }

export default ProjectList;
