import { connect } from "react-redux";
import { testFunction } from "../actions";
import App from "../components/App";

const mapStateToProps = (state, ownProps) => {
  console.log("ownprops", ownProps);
  console.log("state", state);
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(testFunction(ownProps.information));
    },
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
