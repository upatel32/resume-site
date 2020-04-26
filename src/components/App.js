import React from "react";
import Loading from "./Loading";
import HomeContainer from "../containers/HomeContainer";
import AboutContainer from "../containers/AboutContainer";
import SkillContainer from "../containers/SkillContainer";
import ProjectContainer from "../containers/ProjectContainer";
import WorkContainer from "../containers/WorkContainer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home</div>,
    main: HomeContainer,
  },
  {
    path: "/about",
    sidebar: () => <div>about</div>,
    main: AboutContainer,
  },
  {
    path: "/skill",
    sidebar: () => <div>skill</div>,
    main: SkillContainer,
  },
  {
    path: "/project",
    sidebar: () => <div>project</div>,
    main: ProjectContainer,
  },
  {
    path: "/work",
    sidebar: () => <div>work</div>,
    main: WorkContainer,
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
              Project
            </Link>
          </li>
          <li className={"nav-item active"}>
            <Link className={"nav-link"} to="/work">
              Work
            </Link>
          </li>
        </ul>
      </nav>

      <div className={"container-fluid"}>
        <div class="card">
          <div class="card-header">
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
          </div>
          <div class="card-body">
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
        </div>
      </div>
    </Router>
  );
};

export default App;
