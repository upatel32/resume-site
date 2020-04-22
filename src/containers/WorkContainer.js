import { connect } from "react-redux";
import { testFunction } from "../actions";
import Work from "../components/Work";

const mapStateToProps = (state, ownProps) => {
  console.log("ownprops", ownProps);
  console.log("state", state);
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
