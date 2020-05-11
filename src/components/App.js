import React from "react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import HomeContainer from "../containers/HomeContainer";
import ProjectContainer from "../containers/ProjectContainer";
import ResumeContainer from "../containers/ResumeContainer";
import { Route, Switch, withRouter } from "react-router-dom";
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
  console.log("app.js", location);
  return Object.keys(resume).length === 0 ? (
    <Loading />
  ) : (
    <div>
      <Navbar />
      <br />
      <div className={"container"}>
        <TransitionGroup className={"transition-group"}>
          <CSSTransition
            key={location.pathname}
            timeout={{ enter: 3000, exit: 3000 }}
            classNames="page"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <section className={"section"}>
              <h1 className="display-4 text-center text-light">
                <Switch>
                  {routes.map(({ path, Sidebar, Main, exact }, index) => (
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
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.Main />}
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

export default withRouter(App);
