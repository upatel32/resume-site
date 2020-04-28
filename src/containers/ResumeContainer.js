import { connect } from "react-redux";
import { testFunction } from "../actions";
import Work from "../components/Resume";

const mapStateToProps = (state, ownProps) => {
  return { work: state.resume.work };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(testFunction(ownProps.information));
    },
  };
};

const WorkContainer = connect(mapStateToProps, mapDispatchToProps)(Work);

export default WorkContainer;
