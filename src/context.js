import React from "react";
import Axios from "axios";
const siteContext = React.createContext();
export default siteContext;

function reducer(state, action) {
  switch (action.type) {
    case "REQUESTED":
      return { ...state, isLoading: true };
    case "RECEIVED":
      return { isLoading: false, ...action.data };
    default:
      return state;
  }
}

export function SiteContextProvider(props) {
  const initialState = { projects: [], resume: {}, isLoading: false };
  const [information, dispatch] = React.useReducer(reducer, initialState);

  const providerValue = React.useMemo(
    () => ({
      ...information,
      fetchAll: async () => {
        dispatch({ type: "REQUESTED" });
        const resume = await Axios.get(
          "https://gitconnected.com/v1/portfolio/upatel32"
        );
        const projects = await Axios.get(
          "https://api.github.com/users/upatel32/repos"
        );
        dispatch({
          type: "RECEIVED",
          data: { resume: resume.data, projects: projects.data },
        });
      },
    }),
    [information]
  );

  return (
    <siteContext.Provider value={providerValue}>
      {props.children}
    </siteContext.Provider>
  );
}
