import { connect } from "react-redux";
import { testFunction } from "../actions";
import About from "../components/About";

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

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);

export default AboutContainer;
