import React from "react";

function Skill({ skills }) {
  const skillsDom = skills.map((skill, index) => {
    return (
      <div key={index}>
        <div>{skill.name}</div>
        <div>{skill.level}</div>
        <div>{skill.rating}</div>
        <div>{skill.yearsOfExperience}</div>
      </div>
    );
  });
  return <div>{skillsDom}</div>;
}

export default Skill;
