import { connect } from "react-redux";
import { testFunction } from "../actions";
import Home from "../components/Home";

const mapStateToProps = (state, ownProps) => {
  return { basics: state.resume.basics };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(testFunction(ownProps.information));
    },
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
