import React from "react";

function Skill({ skills }) {
  return <div>{JSON.stringify(skills, null, 2)}</div>;
}

export default Skill;
