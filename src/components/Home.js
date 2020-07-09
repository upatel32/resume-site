import React from "react";
import me from "../profile.jpeg";
import linkedinIcon from "../icons/linkedin.svg";
import githubIcon from "../icons/github.svg";
import siteContext from "../context";

function About() {
  const context = React.useContext(siteContext);
  const basics = context.resume.basics;
  return (
    <div className={""}>
      <div className={"row justify-content-center home-card"}>
        <div className={"col-md-6"}>
          <div className={"card text-dark bg-light"}>
            <div className={"card-body"}>
              <h5 className={"card-title text-center"}>
                I'm {basics.name} and currently work as a {basics.label}. Nice
                to meet you!
              </h5>
            </div>
            <div className={"card-body profile-picture"}>
              <img src={me} className="card-img" alt="myself" />
            </div>
            <div className={"card-body"}>
              <div className={"card-text"}>{basics.summary}</div>
            </div>
            <div className={"card-footer"}>
              <div className={"row justify-content-center"}>
                <div className={"col-6 text-center"}>
                  <a href={basics.profiles[2].url}>
                    <img
                      src={linkedinIcon}
                      className={"icon"}
                      alt={"GitHub Profile"}
                    />
                  </a>
                </div>
                <div className={"col-6 text-center"}>
                  <a href={basics.profiles[1].url}>
                    <img
                      src={githubIcon}
                      className={"icon"}
                      alt={"LinkedIn Profile"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
