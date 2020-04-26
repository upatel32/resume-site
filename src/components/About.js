import React from "react";

function About({ basics }) {
  return <div>{JSON.stringify(basics, undefined, 2)}</div>;
}

export default About;
