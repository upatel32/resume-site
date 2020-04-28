import React from "react";
import Loading from "./Loading";
import HomeContainer from "../containers/HomeContainer";
import AboutContainer from "../containers/AboutContainer";
import SkillContainer from "../containers/SkillContainer";
import ProjectContainer from "../containers/ProjectContainer";
import ResumeContainer from "../containers/ResumeContainer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Welcome</div>,
    main: HomeContainer,
  },
  {
    path: "/about",
    sidebar: () => <div>About Me</div>,
    main: AboutContainer,
  },
  {
    path: "/skill",
    sidebar: () => <div>Skills</div>,
    main: SkillContainer,
  },
  {
    path: "/project",
    sidebar: () => <div>Projects</div>,
    main: ProjectContainer,
  },
  {
    path: "/resume",
    sidebar: () => <div>Resume</div>,
    main: ResumeContainer,
  },
];

const App = ({ resume, fetchResume, isLoading }) => {
  if (Object.keys(resume).length === 0 && !isLoading) {
    fetchResume();
  }

  return Object.keys(resume).length === 0 ? (
    <Loading />
  ) : (
    <Router>
      <br />
      <div className={"container-fluid"}>
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
          <ul className={"navbar-nav mr-auto"}>
            <li className={"nav-item active"}>
              <Link className={"nav-link"} to="/">
                Home
              </Link>
            </li>
            <li className={"nav-item active"}>
              <Link className={"nav-link"} to="/about">
                About
              </Link>
            </li>
            <li className={"nav-item active"}>
              <Link className={"nav-link"} to="/skill">
                Skills
              </Link>
            </li>
            <li className={"nav-item active"}>
              <Link className={"nav-link"} to="/project">
                Projects
              </Link>
            </li>
            <li className={"nav-item active"}>
              <Link className={"nav-link"} to="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <br />
      <div className={"container"}>
        <code>
          <h1 class="display-4 text-center text-white">
            <Switch>
              {routes.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </h1>
        </code>
        <hr class="my-4" />
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>{" "}
      </div>
    </Router>
  );
};

export default App;
