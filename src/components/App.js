import React from "react";
import Loading from "./Loading";
import HomeContainer from "../containers/HomeContainer";
import ProjectContainer from "../containers/ProjectContainer";
import ResumeContainer from "../containers/ResumeContainer";
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
  console.log("app.js", location);
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
                    // You can render a <Route> in as many places
                    // as you want in your app. It will render along
                    // with any other <Route>s that also match the URL.
                    // So, a sidebar or breadcrumbs or anything else
                    // that requires you to render multiple things
                    // in multiple places at the same URL is nothing
                    // more than multiple <Route>s.

                    <Route
                      key={index}
                      path={path}
                      exact={exact}
                      children={<Sidebar />}
                    />

                    // <Route key={path} exact path={path}>
                    //   {({ match }) => (
                    //     <CSSTransition
                    //       in={match != null}
                    //       timeout={300}
                    //       classNames="page"
                    //       unmountOnExit
                    //     >
                    //       <div className="page">
                    //         <Sidebar />
                    //       </div>
                    //     </CSSTransition>
                    //   )}
                    // </Route>
                  ))}
                </Switch>
              </h1>
              <hr className="my-4" />
              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
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
