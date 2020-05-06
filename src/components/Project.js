import React from "react";

function Project({ projects }) {
  const projectsDom = projects.map((project, index) => {
    return (
      <div className={"card text-dark bg-light mb-3"}>
        <h5
          className={"card-header text-center stretched-link"}
          href={project.githubUrl}
        >
          {project.name}
        </h5>
        <div className={"card-body border-info"}>
          <p className={"card-text"}>
            <small class={"font-weight-light"}>{project.summary}</small>
          </p>
        </div>
        <div className={" text-center"}>
          {project.languages.map((language) => (
            <span className={"badge badge-secondary"}>{language}</span>
          ))}
        </div>
        <br />
      </div>
    );
  });
  return <div className={"project-wrapper"}>{projectsDom}</div>;
}

export default Project;
