export const TEST_ACTION = "TEST_ACTION";
export const REQUEST_RESUME = "REQUEST_RESUME";
export const RECEIVE_RESUME = "RECEIVE_RESUME";

export function testFunction(randomInput) {
  return { type: TEST_ACTION, randomInput };
}

export function requestResume() {
  return { type: REQUEST_RESUME };
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
