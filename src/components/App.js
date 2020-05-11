import React from "react";
import Loading from "./Loading";
import HomeContainer from "../containers/HomeContainer";
import ProjectContainer from "../containers/ProjectContainer";
import ResumeContainer from "../containers/ResumeContainer";
import Test from "../containers/Test";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles.css";

const routes = [
  {
    path: "/",
    exact: true,
    Sidebar: () => <div>Welcome</div>,
    Main: HomeContainer,
  },
  {
    path: "/project",
    Sidebar: () => <div>GitHub Projects</div>,
    Main: ProjectContainer,
  },
  {
    path: "/resume",
    Sidebar: () => <div>Resume</div>,
    Main: ResumeContainer,
  },
];

const App = ({ resume, fetchResume, isLoading, location }) => {
  if (Object.keys(resume).length === 0 && !isLoading) {
    fetchResume();
  }
  console.log(location);
  return Object.keys(resume).length === 0 ? (
    <Loading />
  ) : (
    <div>
      <nav className={"navbar navbar-expand navbar-light bg-light"}>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className={"navbar-nav"}>
            <li className={"nav-item "}>
              <Link className={"nav-link"} to="/">
                Home
              </Link>
            </li>
            <li className={"nav-item "}>
              <Link className={"nav-link"} to="/project">
                Projects
              </Link>
            </li>
            <li className={"nav-item "}>
              <Link className={"nav-link"} to="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <div className={"container"}>
        <Test />
      </div>
    </div>
  );
};

export default withRouter(App);
