import React from "react";

function Work({ work }) {
  const workDom = work.map((workPlace, index) => {
    return <div key={index}></div>;
  });
  return <div>{JSON.stringify(work, null, 2)}l</div>;
}

export default Work;
