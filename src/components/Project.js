import React from "react";

function Project({ projects }) {
  const projectsDom = projects.map((project, index) => {
    return (
      <div className={"card border-light text-white bg-dark mb-3"}>
        <div className={"card-header  text-center"} href={project.githubUrl}>
          {project.name}
        </div>
        <div className={"card-body border-info"}>
          <p className={"card-text"}>{project.summary}</p>
        </div>
        <div className={"card-footer text-center"}>
          {project.languages.map((language) => (
            <span className={"badge badge-secondary"}>{language}</span>
          ))}
        </div>
      </div>
    );
  });
  return <div className={"project-wrapper"}>{projectsDom}</div>;
}

export default Project;
