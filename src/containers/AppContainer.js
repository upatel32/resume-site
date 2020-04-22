import { connect } from "react-redux";
import { fetchResume } from "../actions";
import App from "../components/App";

const mapStateToProps = (state, ownProps) => {
  console.log("ownprops", ownProps);
  console.log("state", state);
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchResume: () => {
      dispatch(fetchResume());
    },
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
