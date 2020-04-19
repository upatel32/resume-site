import React from "react";
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
    sidebar: () => <div>home!</div>,
    main: HomeContainer,
  },
  {
    path: "/about",
    sidebar: () => <div>home</div>,
    main: AboutContainer,
  },
  {
    path: "/skill",
    sidebar: () => <div>home</div>,
    main: SkillContainer,
  },
  {
    path: "/project",
    sidebar: () => <div>home</div>,
    main: ProjectContainer,
  },
  {
    path: "/work",
    sidebar: () => <div>app</div>,
    main: WorkContainer,
  },
];

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skill">Skills</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
          </ul>

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

        <div style={{ flex: 1, padding: "10px" }}>
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
