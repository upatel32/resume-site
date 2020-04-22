import React from "react";

function Project({ projects }) {
  return <div>{JSON.stringify(projects, null, 2)}</div>;
}

export default Project;
