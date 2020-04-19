import { connect } from "react-redux";
import { testFunction } from "../actions";
import Skill from "../components/Skill";

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

const SkillContainer = connect(mapStateToProps, mapDispatchToProps)(Skill);

export default SkillContainer;
