import { connect } from "react-redux";
import { fetchAll } from "../actions";
import App from "../components/App";

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAll: () => {
      dispatch(fetchAll());
    },
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
