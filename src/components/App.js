import React from "react";
import Loading from "./Loading";
import HomeContainer from "../containers/HomeContainer";
import AboutContainer from "../containers/AboutContainer";
//import SkillContainer from "../containers/SkillContainer";
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
    path: "/project",
    sidebar: () => <div>GitHub Projects</div>,
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
      <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
        <div class="collapse navbar-collapse">
          <ul className={"navbar-nav justify-content-center"}>
            <li className={"nav-item "}>
              <Link className={"nav-link"} to="/">
                Home
              </Link>
            </li>
            <li className={"nav-item "}>
              <Link className={"nav-link"} to="/about">
                About
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
        <h1 class="display-4 text-center text-light">
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
