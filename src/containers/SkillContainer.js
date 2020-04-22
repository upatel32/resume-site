import { connect } from "react-redux";
import { testFunction } from "../actions";
import Skill from "../components/Skill";

const mapStateToProps = (state, ownProps) => {
  return { skills: state.resume.skills };
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
