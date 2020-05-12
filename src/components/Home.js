import React from "react";
import me from "../newprofile.png";

function About({ basics, education }) {
  return (
    <div className={"text-light"}>
      <div class="text-center">
        <img src={me} className="rounded-circle border border-light" alt="" />
      </div>
      <h2 className={"page-section-heading text-center"}>
        Hey! I'm {basics.name} and currently work as a {basics.label}.
      </h2>
      <br />
      <ul>
        <li>{basics.headline}</li>
        <li>{basics.summary}</li>
      </ul>
    </div>
  );

  //return <div>{JSON.stringify(basics, undefined, 2)}</div>;
}

export default About;
