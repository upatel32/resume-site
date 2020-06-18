export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_RESUME = "RECEIVE_RESUME";
export const REQUEST_ALL = "REQUEST_ALL";
export const RECEIVE_ALL = "RECEIVE_ALL";

export function fetchAll() {
  return (dispatch) => {
    dispatch({
      type: REQUEST_ALL,
    });
    Promise.all([
      dispatch(fetchSomething("resume")),
      dispatch(fetchSomething("projects")),
    ]).then(console.log("EVERYTHING FETCHED!"));
  };
}

function fetchSomething(something) {
  console.log("fetching... " + something);
  let url =
    something === "resume"
      ? "https://gitconnected.com/v1/portfolio/upatel32"
      : "https://api.github.com/users/upatel32/repos";

  let received = something === "resume" ? RECEIVE_RESUME : RECEIVE_PROJECTS;

  return (dispatch) => {
    return fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          return Promise.reject(
            new Error(something + " could not be fetched")
          ).catch((error) => console.log("The error was: ", error.message));
        }
        return response.json();
      })
      .then((json) =>
        dispatch({
          type: received,
          [something]: json,
        })
      );
  };
}
