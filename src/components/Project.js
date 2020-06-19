import React from "react";

function Project({ projects }) {
  const projectsDom = Object.keys(projects).map((key, index) => {
    let project = projects[key];
    return (
      <div key={index} className={"card text-dark bg-light"}>
        <h5 className={"card-header text-center "}>
          <a href={project.url} className={"text-decoration-none text-dark"}>
            {project.name}
          </a>
        </h5>
        <div className={"card-body border-info"}>
          <p className={"card-text"}>
            <small className={"font-weight-light"}>{project.description}</small>
          </p>
          <div className={"text-center"}>
            <span key={index} className={"badge text-light"}>
              {project.language}
            </span>
            {/* {project.languages.map((language, index) => (
              <span key={index} className={"badge badge-secondary"}>
                {language}
              </span>
            ))} */}
          </div>
        </div>
      </div>
    );
  });
  return <div className={"card-columns"}>{projectsDom}</div>;
}

export default Project;
