import React from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Resume from "./components/Resume";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./styles.css";
import siteContext from "./context";

const routes = [
  {
    path: "/",
    exact: true,
    Sidebar: () => <div>Welcome</div>,
    Main: Home,
  },
  {
    path: "/project",
    Sidebar: () => <div>GitHub Projects</div>,
    Main: Project,
  },
  {
    path: "/resume",
    Sidebar: () => <div>Resume</div>,
    Main: Resume,
  },
];

const App = () => {
  const context = React.useContext(siteContext);
  const isContent =
    Object.keys(context.resume).length === 0 || context.projects.length === 0;

  if (isContent && !context.isLoading) {
    context.fetchAll();
  }

  let location = useLocation();
  return isContent ? (
    <Loading />
  ) : (
    <div>
      <Navbar />
      <br />
      <div className={"container"}>
        <TransitionGroup className={"transition-group"}>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 400, exit: 0 }}
            classNames="page"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <section className={"section"}>
              <h1 className="display-4 text-center text-light">
                <Switch location={location}>
                  {routes.map(({ path, Sidebar, exact }, index) => (
                    <Route
                      key={index}
                      path={path}
                      exact={exact}
                      children={<Sidebar />}
                    />
                  ))}
                </Switch>
              </h1>
              <hr className="my-4" />
              <Switch>
                {routes.map(({ path, Main, exact }, index) => (
                  <Route
                    key={index}
                    path={path}
                    exact={exact}
                    children={<Main />}
                  />
                ))}
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
