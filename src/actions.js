export const TEST_ACTION = "TEST_ACTION";
export const REQUEST_PROJECTS = "REQUEST_PROJECTS";
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const REQUEST_RESUME = "REQUEST_RESUME";
export const RECEIVE_RESUME = "RECEIVE_RESUME";

export function testFunction(randomInput) {
  return { type: TEST_ACTION, randomInput };
}
export function requestProjects() {
  return {
    type: REQUEST_PROJECTS,
  };
}

export function receiveProjects(json) {
  return {
    type: RECEIVE_PROJECTS,
    projects: json,
  };
}

export function fetchProjects() {
  return (dispatch) => {
    dispatch(requestProjects());
    return fetch("https://api.github.com/users/upatel32/repos", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(
            new Error("Project details could not be fetched")
          ).catch((error) => console.log("The error was: ", error.message));
        }
        return response.json();
      })
      .then((json) => dispatch(receiveProjects(json)));
  };
}

export function requestResume() {
  return {
    type: REQUEST_RESUME,
  };
}

export function receiveResume(json) {
  return {
    type: RECEIVE_RESUME,
    resume: json,
  };
}

export function fetchResume() {
  return (dispatch) => {
    dispatch(requestResume());
    return fetch("https://gitconnected.com/v1/portfolio/upatel32", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(
            new Error("Resume details could not be fetched")
          ).catch((error) => console.log("The error was:", error.message));
        }
        return response.json();
      })
      .then((json) => dispatch(receiveResume(json)));
  };
}
