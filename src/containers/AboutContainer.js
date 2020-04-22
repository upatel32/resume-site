import { connect } from "react-redux";
import { testFunction } from "../actions";
import About from "../components/About";

const mapStateToProps = (state, ownProps) => {
  console.log("ownprops", ownProps);
  console.log("state", state);
  return state.resume.basics;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(testFunction(ownProps.information));
    },
  };
};

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);

export default AboutContainer;
