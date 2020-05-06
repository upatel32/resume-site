import React from "react";
import Moment from "react-moment";

function Work({ work }) {
  const workDom = work.map((workPlace, index) => {
    return (
      <div key={index} className={"jumbotron bg-light text-dark container"}>
        <div className={"row"}>
          <h1 className={"display-6 col-md-9"}>
            <a
              href={workPlace.website}
              className={"text-decoration-none text-dark"}
            >
              {workPlace.company}
            </a>
          </h1>
          <div className={"col-md-3 text-right d-none d-sm-block"}>
            <Moment format={"MMM YYYY"}>{workPlace.startDate}</Moment>
            <span> to </span>
            {index === 0 ? (
              <span>Present</span>
            ) : (
              <Moment format={"MMM YYYY"}>{workPlace.endDate}</Moment>
            )}
            <div>{workPlace.location}</div>
          </div>
        </div>
        <p className={"lead"}>
          <span>{workPlace.position}</span>
        </p>
        <hr className={"my-4"} />
        <p>{workPlace.summary}</p>
        <ul>
          {workPlace.highlights.map((highlight, index) => {
            return (
              <li key={index} className={""}>
                {highlight}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return workDom;
}

export default Work;
