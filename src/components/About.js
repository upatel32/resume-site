import React from "react";

function About({ basics }) {
  return (
    <div className={""}>
      <h2
        className={"page-section-heading text-center text-uppercase text-black"}
      >
        About
      </h2>
    </div>
  );

  //return <div>{JSON.stringify(basics, undefined, 2)}</div>;
}

export default About;
