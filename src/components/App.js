import React from "react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import HomeContainer from "../containers/HomeContainer";
import ProjectContainer from "../containers/ProjectContainer";
import ResumeContainer from "../containers/ResumeContainer";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles.css";

//const ref = React.createRef();
// console.log(ref);
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

const App = ({ resume, isLoading, fetchResume }) => {
  if (Object.keys(resume).length === 0 && !isLoading) {
    fetchResume();
  }

  let location = useLocation();
  return Object.keys(resume).length === 0 ? (
    <Loading />
  ) : (
    <div>
      <Navbar />
      <br />
      <div className={"container"}>
        <TransitionGroup className={"transition-group"}>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 400, exit: 200 }}
            classNames="page"
            mountOnEnter={true}
            unmountOnExit={true}
            //nodeRef={ref}
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
